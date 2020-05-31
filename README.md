# Type Array#includes more

Cool overrideing Array#include 

```typescript
const tag: string = getTag();
const arr = ["a", "div"] as const
if (arr.includes(tag)) { // 😒 Error: Argument of type 'string' is not...
  tag;
}

// After installing this....
if (arr.includes(tag)) {
  tag; // 😁 string , and also known as "a" | "div"
}

```

## Installation

```bash
npm i -D type-array-includes-more
```

## Usage

Update your `tsconfig.json` like below.

```diff
 {
   "compilerOptions": {
     "strict": true,
     "lib": ["es2019"],
+    "typeRoots": [
+       "node_modules/@types",
+       "node_modules/type-array-includes-more"
+    ]
   }
 }
```


## Contributing

Feel free to customize.
This is distributed under public domain.

