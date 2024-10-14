function DescendingOrder(numbers) {
    var numbersArr = numbers.split(",").map(Number);

    for (let i = 0; i < numbersArr.length; i++) {
        for (let j = i + 1; j < numbersArr.length; j++) {
            if (numbersArr[i] < numbersArr[j]) {
                var temp = numbersArr[i];
                numbersArr[i] = numbersArr[j];
                numbersArr[j] = temp;
            }
        }
    }

    return numbersArr;
}

console.log(DescendingOrder("1,5,2,9,3"));