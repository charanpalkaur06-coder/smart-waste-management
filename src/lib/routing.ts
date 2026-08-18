/** Figma screenshot / demo URL modes (?export=...) — not used for normal app entry. */
export function getExportMode(): string | null {
  return new URLSearchParams(window.location.search).get('export');
}

export function isExportCaptureMode(): boolean {
  return getExportMode() !== null;
}

export function clearExportParam(): void {
  const url = new URL(window.location.href);
  if (!url.searchParams.has('export')) return;
  url.searchParams.delete('export');
  const next = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState({}, '', next);
}

const VALID_ROLES = ['manager', 'driver', 'technician', 'officer'] as const;
export type SavedRole = (typeof VALID_ROLES)[number];

export function readSavedRole(): SavedRole | null {
  const saved = sessionStorage.getItem('swm-role');
  return VALID_ROLES.includes(saved as SavedRole) ? (saved as SavedRole) : null;
}
