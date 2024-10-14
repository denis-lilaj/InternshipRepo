function ReverseString(word){
   
    wordArr=word.split("");
    var reversedword="";
    

    for(let i=wordArr.length-1;i>=0;i--)
    {
        reversedword+=wordArr[i];
    }

    console.log(reversedword);
}

ReverseString("Olaf");