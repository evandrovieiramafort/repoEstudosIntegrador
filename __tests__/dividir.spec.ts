import {describe, it, expect} from "vitest"
import { dividir } from "../src/calculadora"

describe(dividir.name, ()=> {
    
    it("Ao receber dois numeros, retorna a divisão por esses mesmos dois números"), ()=> {
        const resultado = dividir(10,2)
        expect(resultado).toBe(5)
    }

    it("Lança exceção quando o divisor for zero", ()=>{
        expect(()=>{
            dividir(10,0)}
        ).toThrow(/zero/)
        })

})