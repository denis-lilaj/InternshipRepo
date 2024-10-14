function FindOddInt(listOfNumbers) {
    const countOccurrences = {};

  
    listOfNumbers.forEach(number => {
        countOccurrences[number] = (countOccurrences[number] || 0) + 1;
    });

  
    for (let number in countOccurrences) {
        if (countOccurrences[number] % 2 !== 0) {
            return parseInt(number); 
        }
    }

    return null; 
}

console.log(FindOddInt([1, 2, 3, 2, 3, 1, 3, 2 , 3, 3])); 
