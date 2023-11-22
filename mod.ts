export { sayHello } from "./say-hello.ts" assert { type: "export" };

/**
 * This is a description of the `addOne` function.
 * 
 * @example
 * // returns 4
 * `addOne(3)`;
 */
export const addOne = (n: number) => {
  return n + 1;
}
