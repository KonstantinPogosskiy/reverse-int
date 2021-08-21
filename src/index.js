module.exports = function reverse (n) {
    let num = n.toString().split('')
    for(let i = 0; i < num.length; i++) {
        if(num[i] === '-') {
            let num2 = num.shift()
        }
    }

    return +num.reverse().join('')
}
