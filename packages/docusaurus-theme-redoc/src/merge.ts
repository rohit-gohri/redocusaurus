/* eslint-disable @typescript-eslint/no-explicit-any */
import isObject from 'lodash/isObject';

/**
 * Simple merge that only merges objects recursively, overwriting rest (arrays, getters, primitives)
 */
function mergeTwo(root: any, overrides: any) {
  if (!overrides) return root;

  Object.keys(overrides).forEach((key) => {
    const objVal: any = Object.getOwnPropertyDescriptor(root, key);
    const srcVal: any = Object.getOwnPropertyDescriptor(overrides, key);

    if (
      objVal &&
      !objVal.get &&
      !srcVal.get &&
      isObject(srcVal.value) &&
      isObject(objVal.value)
    ) {
      mergeTwo(root[key], overrides[key]);
      return;
    }

    Object.defineProperty(root, key, srcVal);
  });

  return root;
}

/**
 * Merge 'n' objects
 */
export function merge(...args: [root: any, first: any, ...rest: any[]]) {
  const [root, first, ...rest] = args;

  let merged = mergeTwo(root, first);
  rest.forEach((override) => {
    merged = mergeTwo(merged, override);
  });

  return merged;
}
