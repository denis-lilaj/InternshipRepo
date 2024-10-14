function CountCharacters(word) {
    var dict = {};
    var wordArr = word.split('');
  
    wordArr.forEach(char => {
      dict[char] = (dict[char] || 0) + 1;
    });
  
    return dict;
  }
  
  console.log(CountCharacters('aba'));