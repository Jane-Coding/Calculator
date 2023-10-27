function choise(number, total, el){
    switch (el){
        case "+": return total + parseFloat(number)
        case "-": return total - parseFloat(number)
        case "*": return total * parseFloat(number)
        case "/": return total / parseFloat(number)
    }
}

export {choise}