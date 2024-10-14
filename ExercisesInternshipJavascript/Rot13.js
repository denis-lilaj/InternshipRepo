function Rot13(sentence) {
    return sentence.replace(/[a-z]/gi, c => {
        const start = c.toLowerCase() === c ? 97 : 65;
        return String.fromCharCode((c.charCodeAt(0) - start + 13) % 26 + start);
    });
}

console.log(Rot13("az AZ"));