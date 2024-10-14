function CandiesNum(candies, extraCandies)
{
    candiesArray=candies.split(",");

    var maxValue=Math.max(Number(...candiesArray));

    var arrayBool=[];

    candiesArray.forEach(candies => {
        if(Number(candies)+Number(extraCandies)>maxValue)
        {
           arrayBool.push(true);
        }
        else{
            arrayBool.push(false);
        }
    });

    
    return arrayBool;
}

console.log(CandiesNum("12,1,12",10));