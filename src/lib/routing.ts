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

export function readSavedRole(): 'manager' | 'driver' | null {
  const saved = sessionStorage.getItem('swm-role');
  return saved === 'manager' || saved === 'driver' ? saved : null;
}
