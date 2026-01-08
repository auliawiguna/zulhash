/**
 * Core FNV-1a Hashing Engine
 */
export function hash(input: string): number {
  const FNV_OFFSET_BASIS = 2166136261;
  const FNV_PRIME = 16777619;
  let hash = FNV_OFFSET_BASIS;

  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, FNV_PRIME);
  }
  return hash >>> 0;
}