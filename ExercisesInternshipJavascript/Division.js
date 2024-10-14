function isDivisible(numbers) {
    const numbersList = numbers.split(',');
    const firstNumber = numbersList[0];
    const secondNumber = numbersList[1]; 
    const thirdNumber = numbersList[2]; 

    if (firstNumber % secondNumber === 0 && firstNumber % thirdNumber === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible('8,4,3')); 
console.log(isDivisible('8,4,2')); 
