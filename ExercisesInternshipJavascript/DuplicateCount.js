function DuplicateCount(word) {
    var characters = word.toLowerCase().split(""); 
    var charCount = {};
    var countDuplicates = 0;

  
    characters.forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1;
    });


    for (let char in charCount) {
        if (charCount[char] > 1) {
            countDuplicates++;
        }
    }

    return countDuplicates;
}

console.log(DuplicateCount("Indivisibility")); 
