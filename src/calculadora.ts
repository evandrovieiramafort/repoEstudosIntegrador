export function somar(n1: number, n2: number): number {
    return n1 + n2
}

export function dividir(n1: number, n2: number): number{
    if(n2 === 0){
        throw new Error("O divisor não pode ser zero!")
    }

    return n1 / n2
}