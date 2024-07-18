export function assertExists<T>(value: T | undefined): asserts value is T {
  if (value === undefined) {
    throw new Error("Value does not exist");
  }
}
