function romanConversion(number) {
    var val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
        ];
    var syb = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
        ];
    var romanNumeral = '';
    for (var i = 0; i < val.length; i++) {
        while (number >= val[i]) {
            romanNumeral += syb[i];
            number -= val[i];
        }
    }
    return romanNumeral;
}

console.log(romanConversion(2421));