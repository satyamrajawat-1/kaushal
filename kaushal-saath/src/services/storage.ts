const STORAGE_KEY = 'kaushal-saath-session';

export function saveSession(data: unknown) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage not available
  }
}

export function loadSession<T>(): T | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as T;
  } catch {
    // Storage not available
  }
  return null;
}

export function clearSession() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage not available
  }
}
