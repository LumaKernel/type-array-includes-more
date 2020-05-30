declare const assert: <_ extends true>() => void;
type And<T extends boolean, U extends boolean> = T extends true
  ? U extends true
    ? true
    : false
  : false;
type Not<T extends boolean> = T extends true ? false : true;
type Extends<T, U> = boolean extends (T extends U ? true : false)
  ? false
  : (T extends U ? true : false) extends true
  ? true
  : false;
type Same<T, U> = And<Extends<T, U>, Extends<U, T>>;
type NotSame<T, U> = Not<Same<T, U>>;

declare const str: string;
declare const num: number;
declare const bignum: bigint;
declare const strNum: string | number;
declare const strA: "a";
declare const strAB: "a" | "b";
declare const strZ: "z";
declare const valNull: null;
declare const valUndefined: undefined;

declare const symA: unique symbol;
declare const symB: unique symbol;
declare const symC: unique symbol;
type SymA = typeof symA;
type SymB = typeof symB;
type SymC = typeof symC;
declare const sym: symbol;

namespace Test01 {
  declare const arr: readonly ["a", "b"];
  arr.length;
  if (arr.includes(str)) {
    assert<Extends<typeof str, "a" | "b">>();
    assert<NotSame<typeof str, "a" | "b">>();
    assert<NotSame<typeof str, string>>();
  } else {
    assert<Same<typeof str, string>>();
  }
  if (arr.includes(str, 1)) {
    assert<Extends<typeof str, "a" | "b">>();
    assert<NotSame<typeof str, "a" | "b">>();
    assert<NotSame<typeof str, string>>();
  } else {
    assert<Same<typeof str, string>>();
  }
  if (arr.includes(strA)) {
    assert<Same<typeof strA, "a">>();
    assert<NotSame<typeof strA, string>>();
  } else {
    assert<Same<typeof strA, "a">>();
  }
  if (arr.includes(strZ)) {
    assert<Same<typeof strZ, never>>();
  } else {
    assert<Same<typeof strZ, "z">>();
  }
  // @ts-expect-error
  arr.includes(strNum);
  // @ts-expect-error
  arr.includes(num);
}

namespace Test01Array {
  declare const arr: Array<"a" | "b">;
  arr.length;
  if (arr.includes(str)) {
    assert<Extends<typeof str, "a" | "b">>();
    assert<NotSame<typeof str, "a" | "b">>();
    assert<NotSame<typeof str, string>>();
  } else {
    assert<Same<typeof str, string>>();
  }
  if (arr.includes(str, 1)) {
    assert<Extends<typeof str, "a" | "b">>();
    assert<NotSame<typeof str, "a" | "b">>();
    assert<NotSame<typeof str, string>>();
  } else {
    assert<Same<typeof str, string>>();
  }
  // @ts-expect-error
  arr.includes(strNum);
  // @ts-expect-error
  arr.includes(num);
}

namespace Test03 {
  declare const arr: readonly [SymA, SymB];
  if (arr.includes(symA)) {
    assert<Same<typeof symA, SymA>>();
  } else {
    assert<Same<typeof symA, SymA>>();
  }
  if (arr.includes(symC)) {
    assert<Same<typeof symC, never>>();
  } else {
    assert<Same<typeof symC, SymC>>();
  }
  if (arr.includes(sym)) {
    assert<Extends<typeof sym, SymA | SymB>>();
  } else {
    assert<Same<typeof sym, symbol>>();
  }
  // @ts-expect-error
  arr.includes(str);
}

namespace Test04 {
  declare const arr: readonly ["a", SymA, SymB, Object];
  if (arr.includes(symA)) {
    assert<Same<typeof symA, SymA>>();
  } else {
    assert<Same<typeof symA, SymA>>();
  }
  if (arr.includes(symC)) {
    assert<Same<typeof symC, SymC>>();
  } else {
    assert<Same<typeof symC, SymC>>();
  }
  if (arr.includes(sym)) {
    assert<Extends<typeof sym, symbol>>();
    assert<Not<Extends<typeof str, SymA | SymB>>>();
  } else {
    assert<Same<typeof symC, SymC>>();
  }
  if (arr.includes(str)) {
    assert<Extends<typeof str, string>>();
    assert<Not<Extends<typeof str, "a">>>();
  } else {
    assert<Same<typeof str, string>>();
  }
  if (arr.includes(num)) {
    assert<NotSame<typeof num, never>>();
    assert<Extends<typeof num, number>>();
  } else {
    assert<Same<typeof num, number>>();
  }
}

namespace Test05 {
  declare const arr: readonly [1n];
  if (arr.includes(bignum)) {
    assert<Extends<typeof bignum, 1n>>();
  } else {
    assert<Extends<typeof bignum, bigint>>();
  }
  // @ts-expect-error
  arr.includes(num);
}

namespace Test06 {
  declare const arr: readonly [null];
  if (arr.includes(valNull)) {
    assert<Same<typeof valNull, null>>();
  } else {
    assert<Same<typeof valNull, null>>();
  }
  // @ts-expect-error
  arr.includes(num);
}

namespace Test07 {
  declare const arr: readonly [undefined];
  if (arr.includes(valUndefined)) {
    assert<Same<typeof valUndefined, undefined>>();
  } else {
    assert<Same<typeof valUndefined, undefined>>();
  }
  // @ts-expect-error
  arr.includes(num);
}

namespace Test08 {
  declare const arr: ReadonlyArray<string>;
  if (arr.includes(str)) {
    assert<Extends<typeof str, string>>();
  } else {
    assert<Extends<typeof str, string>>();
  }
  // @ts-expect-error
  arr.includes(num);
}

namespace Test09 {
  declare const arr: ReadonlyArray<"a">;
  if (arr.includes(strAB)) {
    assert<Extends<typeof strAB, "a">>();
  } else {
    // Note: Intuitively, strAB is "b" but arr.length can be 0
    assert<Not<Extends<typeof strAB, "b">>>();
    assert<Extends<typeof strAB, "a" | "b">>();
  }
}

// @ts-expect-error not accessable
PrivateArrayIncludesSymbol;
