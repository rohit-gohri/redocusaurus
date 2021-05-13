export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[] // eslint-disable-next-line @typescript-eslint/ban-types
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};
