const lista = [4,4,5,6,7,8,8,9,10,10,10,10,11,11,12,12,13,14,15,16,16,16,18,19,20]

const findIndexPosition = (target, list) => {
    const indices = list.reduce((acc, element, index) => {
        if (element === target) {
            acc.push(index)
        }
        return acc
    }, [])
    return indices
}

const setOutput = (num, list) => {
    const array = findIndexPosition(num, list)
    const output = array.length > 0 ? [array[0], array[array.length-1]] : [-1, -1]
    return output
}

console.log(setOutput(16, lista))
