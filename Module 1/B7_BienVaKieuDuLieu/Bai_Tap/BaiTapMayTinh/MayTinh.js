let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let result = 0;

function caculator(operator) {
        switch (operator) {
            case '+':{
                result = parseFloat(number1.value) + parseFloat(number2.value);
            }
            break;
            case '-':{
                result = parseFloat(number1.value) - parseFloat(number2.value);
            }
            break;
            case '*':{
                result = parseFloat(number1.value) * parseFloat(number2.value);
            }
            break;
            case '/':{
                result = parseFloat(number1.value) / parseFloat(number2.value);
            }
        }
        alert(result);
}