#!/usr/bin/env node
/**
 * Push Smart Waste Management design tokens to an existing Figma file.
 *
 * Usage:
 *   FIGMA_ACCESS_TOKEN=figd_xxx FIGMA_FILE_KEY=NudMsbIEggM4iDsLsrb3dl node scripts/figma-sync.mjs
 *
 * Get token: Figma → Settings → Security → Personal access tokens
 * Get file key: from URL https://www.figma.com/design/{FILE_KEY}/...
 *
 * Note: POST /variables requires Figma Enterprise (Editor). Without it, use Tokens Studio plugin + design-tokens.json.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;

const API = 'https://api.figma.com/v1';

function hexToFigmaColor(hex) {
  const h = hex.replace('#', '');
  if (h.length !== 6) return null;
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  return { r, g, b, a: 1 };
}

function flattenColors(tokens) {
  const out = [];
  for (const [group, shades] of Object.entries(tokens.color)) {
    if (group === 'semantic') {
      for (const [name, def] of Object.entries(shades)) {
        const hex = def.value;
        if (typeof hex === 'string' && hex.startsWith('#')) {
          out.push({ name: `semantic/${name}`, hex });
        }
      }
    } else {
      for (const [shade, def] of Object.entries(shades)) {
        out.push({ name: `${group}/${shade}`, hex: def.value });
      }
    }
  }
  return out;
}

async function figma(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      'X-Figma-Token': TOKEN,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = body.err || body.message || res.statusText;
    throw new Error(`${res.status} ${path}: ${msg}`);
  }
  return body;
}

async function main() {
  if (!TOKEN) {
    console.error('Missing FIGMA_ACCESS_TOKEN');
    process.exit(1);
  }
  if (!FILE_KEY) {
    console.error('Missing FIGMA_FILE_KEY');
    process.exit(1);
  }

  const tokensPath = join(__dirname, '../figma-export/design-tokens.json');
  const tokens = JSON.parse(readFileSync(tokensPath, 'utf8'));
  const colors = flattenColors(tokens);

  console.log('Checking Figma account…');
  const me = await figma('/me');
  console.log(`  Signed in as: ${me.email || me.handle || 'ok'}`);

  console.log(`Syncing ${colors.length} color variables to file ${FILE_KEY}…`);

  const collectionTempId = 'swm_collection';
  const modeTempId = 'swm_mode';

  const variables = colors
    .map((c, i) => {
      const color = hexToFigmaColor(c.hex);
      if (!color) return null;
      return {
        action: 'CREATE',
        id: `var_${i}`,
        name: c.name,
        variableCollectionId: collectionTempId,
        resolvedType: 'COLOR',
      };
    })
    .filter(Boolean);

  const variableModeValues = colors
    .map((c, i) => {
      const color = hexToFigmaColor(c.hex);
      if (!color) return null;
      return {
        variableId: `var_${i}`,
        modeId: modeTempId,
        value: color,
      };
    })
    .filter(Boolean);

  const payload = {
    variableCollections: [
      {
        action: 'CREATE',
        id: collectionTempId,
        name: 'Smart Waste / Colors',
        initialModeId: modeTempId,
      },
    ],
    variableModes: [
      {
        action: 'CREATE',
        id: modeTempId,
        name: 'Default',
        variableCollectionId: collectionTempId,
      },
    ],
    variables,
    variableModeValues,
  };

  try {
    const result = await figma(`/files/${FILE_KEY}/variables`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    console.log('Success:', result.meta?.tempIdToRealId ? 'variables created' : 'done');
    if (result.meta?.tempIdToRealId) {
      console.log('  Collection:', result.meta.tempIdToRealId[collectionTempId]);
    }
    console.log(`\nOpen: https://www.figma.com/design/${FILE_KEY}/`);
  } catch (err) {
    if (String(err.message).includes('403') || String(err.message).includes('401')) {
      console.error('\nVariables API may require Enterprise + file_variables:write scope.');
      console.error('Alternative: use Tokens Studio plugin with figma-export/design-tokens.json');
    }
    throw err;
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
