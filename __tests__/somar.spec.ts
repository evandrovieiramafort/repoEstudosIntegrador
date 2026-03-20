import {describe, it, expect} from "vitest"
import { somar } from "../src/calculadora"

describe("somar", () => {
    it("retorna um numero positivo ao somar dois numeros positivos", () => {
        const resultado = somar(2,3)
        expect(resultado).toBe(5)
    })

    it("Soma dois flutuantes", ()=> {
        const resultado = somar(0.1, 0.2)
        expect(resultado).toBeCloseTo(0.3, 2)
    })
})
