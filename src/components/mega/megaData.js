const generate = function (qtde) {

    var numbers = []

    for (let index = 0; index < qtde; index++) {
        var number = generateRandomNumber(numbers)

        numbers.push(number)
    }

    numbers = numbers.sort((n1, n2) => n1 - n2)
    return numbers;
}

function generateRandomNumber(array) {
    var number = Math.floor(Math.random() * (99 - 1 + 1)) + 1;

    return array.includes(number) ? 
        generateRandomNumber(array) : 
        number
}

export default generate