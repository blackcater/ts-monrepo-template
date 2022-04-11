import { describe, it, expect } from "vitest"
import { calc } from "../src/calc"

describe("calc#calc", () => {
  it("should be right", () => {
    expect(calc("add", 1, 1)).toBe(2)
  })
})
