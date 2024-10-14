function SumOfPositives(numbers){
    const numbersArray=numbers.split(",");
    var sum=0;

    numbersArray.forEach(number => {
        if(number>=0)
        {
         sum+=Number(number);
        }
    });

    return sum;
}


console.log(SumOfPositives("1,3,-2,6"));