export function tryParseInt(num: string): number | null {
  try {
    const result = parseInt(num);
    if (isNaN(result)) {
      return null;
    }
    return result;
  } catch (e) {
    return null;
  }
}
