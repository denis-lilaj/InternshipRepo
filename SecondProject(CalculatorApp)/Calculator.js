var buttons = document.querySelectorAll("input[type='button']");
var textarea = document.querySelector("textarea");

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = button.value;
        console.log(value);
        
        textarea.value += value;  
        
        if (value === "AC") {
            textarea.value = "";
        }else if(value === "=") {
            
            textarea.value=calculateExpression(textarea.value);
            
        }
    });
});

function calculateExpression(expression) {
    expression = expression.replace(/\s+/g, '');

    let tempNumbers = [];
    let tempOperators = [];
    let currentNumber = '';

    for (let char of expression) {
        if (/\d|\./.test(char)) {
            currentNumber += char;
        } else {
            if (currentNumber) {
                tempNumbers.push(Number(currentNumber));
                currentNumber = '';
            }

            if (char === '*' || char === '/') {
                const lastNumber = tempNumbers.pop();
                let nextNumber = '';
                let i = expression.indexOf(char) + 1;

                while (i < expression.length && /\d|\./.test(expression[i])) {
                    nextNumber += expression[i];
                    i++;
                }

                if (char === '*') {
                    tempNumbers.push(lastNumber * Number(nextNumber));
                } else {
                    tempNumbers.push(lastNumber / Number(nextNumber));
                }
            } else {
                tempOperators.push(char);
            }
        }
    }

    if (currentNumber) {
        tempNumbers.push(Number(currentNumber));
    }

    let result = tempNumbers[0];

    for (let i = 0; i < tempOperators.length; ++i) {
        const operator = tempOperators[i];
        const nextNumber = tempNumbers[i + 1];

        switch (operator) {
            case '+':
                result += nextNumber;
                break;

            case '-':
                result -= nextNumber;
                break;
        }
    }

    return result;
}
