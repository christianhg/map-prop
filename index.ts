export const mapProp = <A, B extends keyof A, C>(
  f: (b: A[B]) => C,
  b: B,
  a: A
) => Object.assign({}, a, { [b]: f(a[b]) })
