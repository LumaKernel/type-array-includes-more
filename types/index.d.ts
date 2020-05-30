declare const PrivateArrayIncludesSymbol: unique symbol;

declare global {
  interface Array<T> {
    includes(searchElement: T, fromIndex?: number): boolean;

    includes(
      searchElement:
        | T
        | (T extends number ? number : never)
        | (T extends string ? string : never)
        | (T extends boolean ? boolean : never)
        | (T extends symbol ? symbol : never)
        | (T extends null ? null : never)
        | (T extends undefined ? undefined : never)
        | (T extends bigint ? bigint : never),
      fromIndex?: number
    ): searchElement is (T &
      (
        | (T extends number ? T & number : never)
        | (T extends string ? T & string : never)
        | (T extends boolean ? T & boolean : never)
        | (T extends symbol ? T & symbol : never)
        | (T extends null ? T & null : never)
        | (T extends undefined ? T & undefined : never)
        | (T extends bigint ? T & bigint : never)
        | (T extends infer U ? (number extends U ? number : never) : never)
        | (T extends infer U ? (string extends U ? string : never) : never)
        | (T extends infer U ? (boolean extends U ? boolean : never) : never)
        | (T extends infer U ? (symbol extends U ? symbol : never) : never)
        | (T extends infer U ? (null extends U ? null : never) : never)
        | (T extends infer U
            ? undefined extends U
              ? undefined
              : never
            : never)
        | (T extends infer U ? (bigint extends U ? bigint : never) : never)
      )) & { [PrivateArrayIncludesSymbol]: never };
  }

  interface ReadonlyArray<T> {
    includes(searchElement: T, fromIndex?: number): boolean;

    includes(
      searchElement:
        | T
        | (T extends number ? number : never)
        | (T extends string ? string : never)
        | (T extends boolean ? boolean : never)
        | (T extends symbol ? symbol : never)
        | (T extends null ? null : never)
        | (T extends undefined ? undefined : never)
        | (T extends bigint ? bigint : never),
      fromIndex?: number
    ): searchElement is (T &
      (
        | (T extends number ? T & number : never)
        | (T extends string ? T & string : never)
        | (T extends boolean ? T & boolean : never)
        | (T extends symbol ? T & symbol : never)
        | (T extends null ? T & null : never)
        | (T extends undefined ? T & undefined : never)
        | (T extends bigint ? T & bigint : never)
        | (T extends infer U ? (number extends U ? number : never) : never)
        | (T extends infer U ? (string extends U ? string : never) : never)
        | (T extends infer U ? (boolean extends U ? boolean : never) : never)
        | (T extends infer U ? (symbol extends U ? symbol : never) : never)
        | (T extends infer U ? (null extends U ? null : never) : never)
        | (T extends infer U
            ? undefined extends U
              ? undefined
              : never
            : never)
        | (T extends infer U ? (bigint extends U ? bigint : never) : never)
      )) & { [PrivateArrayIncludesSymbol]: never };
  }
}

declare const dummy: never;
export default dummy;
