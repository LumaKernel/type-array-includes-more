# Type Array#includes more

[![GitHub Actions CI](https://github.com/LumaKernel/type-array-includes-more/workflows/GitHub%20Actions%20CI/badge.svg)](https://github.com/LumaKernel/type-array-includes-more/actions?query=workflow%3A%22GitHub+Actions+CI%22)

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

This package is designed for your existing valid code to remain valid after installing.

Please see [test](test/test.ts) for more details.
Type annotation is also designed to consider `else` clause. Because of that, the type inffered is little tricky. But Don't worry, that can be used intuively.

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

