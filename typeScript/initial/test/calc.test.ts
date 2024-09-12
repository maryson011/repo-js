import { somar } from "../src/calc"

test("Deve somar corretamente", () => {
    const res = somar(12,23)
    
    expect(res).toBe(35)
})
