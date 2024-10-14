function firstNonRepeatingLetter(word) {
    var cleanedWord = word.toLowerCase().replace(/[^a-z]/g, '');
    var wordDict = {};

    cleanedWord.split('').forEach(char => {
        wordDict[char] = (wordDict[char] || 0) + 1;
    });

    for (var i = 0; i < word.length; i++) {
        var char = word[i].toLowerCase();
        if (wordDict[char] === 1) {
            return word[i];
        }
    }

    return '';
}

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('sTreSS')); // 't'
console.log(firstNonRepeatingLetter('abba')); // ''
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // 'o'