// 两数相加
function add(n1: number, n2: number) {
  return n1 + n2
}

// 计算两数算法
export function calc(method: string, hls: number, hrs: number): number {
  switch (method) {
    case "add":
      return add(hls, hrs)
  }
  return -1
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

  describe("calc#calc", () => {
    it("should be right", () => {
      expect(add(1, 1)).toBe(2)
    })
  })
}
