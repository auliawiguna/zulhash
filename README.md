# ZulHash ⚡️

A high-performance, zero-dependency, lightweight hashing library for TypeScript and JavaScript.

[![npm version](https://img.shields.io/npm/v/zulhash.svg)](https://www.npmjs.com/package/zulhash)
[![license](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/auliawiguna/zulhash/blob/master/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/zulhash)](https://bundlephobia.com/package/zulhash)

**ZulHash** provides an extremely fast non-cryptographic hashing implementation (FNV-1a) designed for speed and simplicity. It is perfect for hash tables, cache keys, and generating short unique identifiers.

---

## Features

* 🚀 **Fast:** Uses 32-bit bitwise operations (`Math.imul`) for maximum performance.
* 📦 **Tiny Footprint:** Zero dependencies. Less than 1KB gzipped.
* 🛡️ **TypeScript Native:** Fully typed with `.d.ts` declarations included.
* 🔄 **Stable Object Hashing:** Includes a utility to hash objects regardless of key order.
* 🌐 **Universal:** Works in Node.js, Browsers, and Edge environments.

---

## Installation

```bash
npm install zulhash
# or
yarn add zulhash
# or
pnpm add zulhash
```

## Quick Start
### Basic String Hashing
Convert any string into a 32-bit unsigned integer.

```ts
import { hash } from 'zulhash';

const hashString = hash('Hello World');
console.log(hashString); // 78013340
```

### Generating Short IDs
Convert a string or payload into an alphanumeric Short ID (Base36).

```ts
import { shortId } from 'zulhash';

const id = shortId('user_session_99');
console.log(id); // "1W5K9A"
```

### Hashing Objects
ZulHash automatically sorts object keys to ensure the same object always yields the same hash.
```ts
import { hashObject } from 'zulhash';

const obj1 = { name: 'Zul', role: 'admin' };
const obj2 = { role: 'admin', name: 'Zul' };

console.log(hashObject(obj1) === hashObject(obj2)); // true
```
## API Reference
```ts
hash(input: string): number
```
The primary hashing function based on the FNV-1a algorithm. Returns a 32-bit positive integer.

```ts
shortId(input: string): string
```
Takes a string and returns a short, uppercase alphanumeric string. Ideal for UI keys or DOM IDs.

```ts
hashObject(obj: object): number
```
Deterministic hashing for JSON-serializable objects. It performs a stable stringify before hashing.

## When to use ZulHash?
Use Case | ZulHash | Crypto (SHA-256)
-- | -- | --
Maps / Caching | ✅ Yes | ⚠️ Overkill
Short IDs | ✅ Yes | ❌ Too long
Passwords / Security | ❌ No | ✅ Yes

###Note: 
ZulHash is a non-cryptographic hash. Do not use it for storing passwords or sensitive security-related data.