function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; 
    const chars = word.split(''); 
    let count = 0;

    chars.forEach(char => {
        if (vowels.includes(char.toLowerCase())) {
            count += 1; 
        }
    });

    return count;
}


console.log(countVowels('Albi'));