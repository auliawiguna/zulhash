import { hash } from './core';

export function shortId(input: string): string {
  return hash(input).toString(36).toUpperCase();
}

export function hashObject(obj: Record<string, any>): number {
  const stableString = JSON.stringify(obj, Object.keys(obj).sort());
  return hash(stableString);
}