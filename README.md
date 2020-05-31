# Type Array#includes more

NOTICE: WIP

```typescript
declare const tag: string;
const arr = ["a", "div"] as const
if (arr.includes(tag)) { // :thinking_face: Error by default
  tag;
}

// After installing this....
if (arr.includes(tag)) { // 
  tag; // :: string , and also "a" | "div"
}

```

## Installation

```bash
npm i -D type-array-includes-more
```

## Usage

```diff
 {
   "compilerOptions": {
     "strict": true,
     "lib": ["es2019"],
     "typeRoots": [
+       "node_modules/@types",
+       "node_modules/type-array-includes-more"
     ]
   }
 }
```


## Contributing

Feel free to customize.
This is distributed under public domain.

