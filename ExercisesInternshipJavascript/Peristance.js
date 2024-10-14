function Persistance(num) {
    var numbers = num.toString().split('').map(Number);
    var iterations = 0;

    while (numbers.length > 1) {
        var result = numbers.reduce((a, b) => a * b, 1);
        numbers = result.toString().split('').map(Number);
        iterations++;
    }

    return iterations;
}

console.log(Persistance('999')); 
