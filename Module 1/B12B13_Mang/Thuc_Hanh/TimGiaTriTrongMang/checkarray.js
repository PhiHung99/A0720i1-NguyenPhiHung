// let check = parseInt(prompt("Nhập vào phần tử cần tìm:"))
//
// let x = [-3,5,1,3,2,10];
// for(let i = 0; i <= x.length - 1; i++){
//     // Kiểm tra check k có trong x thì prompt() chưa đc
//     if (isNaN(check)){
//         check = parseInt(prompt("Kiểm tra, nhập lại phần tử cần tìm:"))
//     } else
//     if (x[i] === check ){
//         document.writeln("Check " + x[i] + " nằm ở vị trí " + i);
//     }
// }


let number = 0;
let check = true;
let x = [-3, 5, 1, 3, 2, 10];
while (check) {
    // check true tìm phần tử nếu k có tiếp tục nhập
    // check false đã tìm thấy thì out
    if (isNaN(number) || check) {
        number = parseInt(prompt(" Nhập phần tử cần tìm:"))
    }
    for (let i = 0; i <= x.length - 1; i++) {
        if (x[i] === number) {
            check = false;
            document.writeln("Check " + x[i] + " nằm ở vị trí " + i);
        }
    }

}