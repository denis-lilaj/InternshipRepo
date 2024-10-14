function isEqual(firstWords, secondWords, thirdWords) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
  
    var firstWord = firstWords.split('');
    var secondWord = secondWords.split('');
    var thirdWord = thirdWords.split('');
  
  
    firstWord.forEach(element => {
      sum1 = sum1 + alphabet.indexOf(element);
    });
  
    secondWord.forEach(element => {
      sum2 = sum2 + alphabet.indexOf(element);
    });
  
    thirdWord.forEach(element => {
      sum3 = sum3 + alphabet.indexOf(element);
    });
  
  
    if (sum1 === sum2 && sum2 === sum3) {
      return true;
    }
  
    return false;
  }
  
  console.log(isEqual("aaab", "aba", "aabaa"));