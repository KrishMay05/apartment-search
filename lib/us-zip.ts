const ZIP_PATTERN = /^\d{5}(?:-\d{4})?$/;

export function normalizeUsZip(input: string): string | null {
  const trimmed = input.trim();
  if (!ZIP_PATTERN.test(trimmed)) {
    return null;
  }

  return trimmed.slice(0, 5);
}

export function isValidUsZip(input: string): boolean {
  return normalizeUsZip(input) !== null;
}
