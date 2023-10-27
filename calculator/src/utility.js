function choise(number, total, el){
    switch (el){
        case "+": return total + parseInt(number)
        case "-": return total - parseInt(number)
        case "*": return total * parseInt(number)
        case "/": return total / parseInt(number)
    }
}

export {choise}