function HashtagGenerator(sentence){
    var hashtagSentence="#";
    var words=sentence.replace(/ /g,"");
   
    return hashtagSentence+words;
}

console.log(HashtagGenerator("Motorrat po sillen si    n'Kalifornia"));