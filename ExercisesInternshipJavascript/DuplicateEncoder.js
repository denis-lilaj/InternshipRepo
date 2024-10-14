function DuplicateEncoder(word){
    const arrayChar = word.toLowerCase().split('');
    var obj = {};
    var wordEncoded = '';
    
    arrayChar.forEach(element => {
        if(obj[element] == null) {
            obj[element] = true;
            wordEncoded += "(";
        } else {
            wordEncoded += ")";
        }
    });
    
    console.log(wordEncoded);
}

DuplicateEncoder('recede');