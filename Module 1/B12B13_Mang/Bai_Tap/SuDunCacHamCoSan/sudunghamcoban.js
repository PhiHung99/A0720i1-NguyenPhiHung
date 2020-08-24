function bai1() {
    let myColor = ["Red", "Green", "White", "Black"];
    document.writeln("myColor: " + myColor + "<br>");
    document.writeln("toString: " + myColor.toString() + "<br>");
    document.writeln("join: " + myColor.join() + "<br>");
    document.writeln("join: " + myColor.join('-'));
}

function bai2() {
    let num = prompt();
    let str = num.toString();
    let result = [str[0]];

    for (let x = 1; x < str.length; x++) {
        if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
            result.push('-', str[x]);
        } else {
            result.push(str[x]);
        }
    }
    document.writeln(result.join(''));
}


function bai3() {
    let string = prompt();
    let result = [];
    let testsupper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let testslower = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < string.length; i++){
        if(testslower.indexOf(string[i]) !== -1){
            result.push(string[i].toUpperCase());
        } else if(testsupper.indexOf(string[i]) !== -1){
            result.push(string[i].toLowerCase());
        } else {
            result.push(string[i]);
        }
    }
    document.writeln(result.join(''));
}