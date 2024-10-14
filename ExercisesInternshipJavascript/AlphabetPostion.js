function AlphabetPosition(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var arrayEl = [];

    sentence.toLowerCase().split('').forEach(char => {
        let position = alphabet.indexOf(char) + 1;
        if (position > 0) {
            arrayEl.push(position);
        }
    });

    console.log(arrayEl.join(' '));
}

AlphabetPosition("The narwhal bacons at midnight");