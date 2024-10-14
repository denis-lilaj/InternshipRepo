function ArrayDiff(array1, array2) {
    let arrayDiff = [];

    array1.forEach(element => {
        let found = false; 
        for (let i = 0; i < array2.length; ++i) {
            if (element === array2[i]) {
                found = true; 
                break; 
            }
        }

        if (!found) {
            arrayDiff.push(element); 
        }
    });

    return arrayDiff;
}

console.log(ArrayDiff([1, 7, 4, 3], [7, 4, 3]));
