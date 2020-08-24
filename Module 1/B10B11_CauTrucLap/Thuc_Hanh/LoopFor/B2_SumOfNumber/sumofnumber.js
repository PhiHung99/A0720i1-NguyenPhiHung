let num = parseFloat(prompt("Enter you number:"));
let sum = 0;
for(let i = 1; i <= num; i++){
    sum = sum + i;
}
document.writeln("Tổng các số bắt đầu từ 1 đến " + num + " là: " + sum);