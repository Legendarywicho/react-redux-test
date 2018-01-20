import constanst from "../Constants"

export function addNumber(number) {
    return {
        type : constanst.add,
        payload : number
    }
}

export function substractNumber(number) {
    return {
        type: constanst.subtract,
        payload: number
    }
}