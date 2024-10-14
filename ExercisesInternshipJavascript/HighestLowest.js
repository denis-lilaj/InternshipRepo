function HighestLowest(numbers){
   
    numbersArr=numbers.split(',');

    console.log(LowestValue(numbersArr));
    console.log(HighestValue(numbersArr));


}

HighestLowest("2,10,3,5,7");


function LowestValue(numbers) {
    var min = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i+1]) { 
            min=numbers[i];
        }
    }

    return min; 
}

function HighestValue(numbers) {
    var max = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i-1]) { 
            max=numbers[i];
        }
    }

    return max; 
}

