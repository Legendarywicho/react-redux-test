import constanst from "../Constants"

export function setName(name) {
    return {
        type : constanst.set_name,
        payload : name
    }
}

export function setAge(age){
    return {
        type: constanst.set_age,
        payload: age
    }
}