function MiddleCharacter(word){
 
    var wordArr=word.split("");
    var number=wordArr.length;
    var middleCharacter='';

    if(number%2===0)
    {
        
        middleCharacter=`${wordArr[Math.floor(number/2)-1]}`+`${wordArr[Math.floor(number/2)]}`;
    }

    else{
        console.log(number/2+1);
        middleCharacter=wordArr[Math.floor(number/2+1)-1];
    }

    console.log(middleCharacter);

}

MiddleCharacter('Denisi');