function Disemvowel(word){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; 
    const chars = word.split('');
    var newWord='';

    chars.forEach(char => {
        if (!vowels.includes(char.toLowerCase())) {
            newWord+=char;
        }
    });

    return newWord;
}

console.log(Disemvowel('Albi'));