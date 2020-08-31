function bai1() {
    let month =  parseInt(prompt("Nhập vào tháng cần kiểm tra"));
    nb
}


function bai3() {
    let n = parseInt(prompt("Nhập vào n số bị chia"));
    function sum() {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += 1 / i;
        }
        return sum;
    }
    let check = true;
    if (isNaN(n) || n === 0){
        check = false;
    }
    if (!check){
        alert("Kiểm tra số bạn nhập có đúng định dạng không");
    } else alert(sum());
}

function bai4() {
    let n = parseInt(prompt("Nhập vào số n"));
    function sum() {
        let sum = 15;
        let giaiThua = 1;
        for (let i = 1; i <= n; i++){
            sum += Math.pow((-1), i)/(giaiThua *= i);
        }
        return sum;
    }
    let check = true;
    if (isNaN(n)){
        check = !check;
    }
    if (!check){
        alert("Kiểm tra số bạn nhập có đúng định dạng không");
    } else alert(sum());
}

// sai
// S=1+1/3!+1/5!+…..+1/(2n-1)!
function bai5() {
    let n = parseInt(prompt("Nhập vào số n"));
    function sum() {
        let sum = 0;
        let giaiThua = 1;
        for (let i = 1;i <= n; i += 2){
            sum += 1/(giaiThua *= i);
        }
        return sum;
    }
    let check = true;
    if (isNaN(n)){
        check = !check;
    }
    if (!check){
        alert("Kiểm tra số bạn nhập có đúng định dạng không");
    }else alert(sum());
}



function bai6() {
    let n = parseInt(prompt("Nhập vào số n"));
    function area() {
        let areaLe = 1;
        let areaChan = 1;
        for (let i = 1; i <= n; i++){
            if (i%2 === 0){
                areaChan *= i;
            } else areaLe *= i;
        }
        alert("Tích các số chẵn là: " + areaChan);
        alert("Tích các số lẽ là: " + areaLe);
    }
    let check = true;
    if (isNaN(n) || n === 0){
        check = !check;
    }
    if (!check){
        alert("Kiểm tra số bạn nhập có đúng định dạng không");
    }else area();
}


function bai7() {
    let n = prompt("Nhập vào chữ số bạn muốn tính");
    n.toString();
    function sum() {
        let sum = 0;
        for (let i = 0; i < n.length; i++){
            sum += parseInt(n.charAt(i));
        }
        return sum;
    }
    function area(){
        let area = 1;
        for (let i = 0; i < n.length; i++){
            area *= parseInt(n.charAt(i));
        }
        return area;
    }
    let check = true;
    if (isNaN(n)){
        check = !check;
    }
    if (!check){
        alert("Kiểm tra số bạn nhập có đúng định dạng không");
    }else {
        alert("Tích của chữ số " + n + " là " + area());
        alert("Tổng của chữ số " + n + " là " + sum());
    }
}


function bai8() {
    let a = parseInt(prompt("Nhập vào số nguyên dương thứ 1"));
    let b = parseInt(prompt("Nhập vào số nguyên dương thứ 2"));
    function gcd(a,b) {
        // Hàm Math.abs () trong JavaScript được sử dụng để trả về giá trị tuyệt đối của một số. Nó lấy một số làm tham số của nó và trả về giá ...
        a = Math.abs(a);
        b = Math.abs(b);
        if (b > a) {let temp = a; a = b; b = temp;}
        while (true) {
            if (b === 0) return a;
            a %= b;
            if (a === 0) return b;
            b %= a;
        }
    }
    alert(gcd(a,b));
    // cách 2
    // function egcd(a, b) {
    //     if (a === 0)
    //         return b;
    //
    //     while (b !== 0) {
    //         if (a > b)
    //             a = a - b;
    //         else
    //             b = b - a;
    //     }
    //
    //     return a;
    // }
    // alert(egcd(a,b));
//    đệ quy
//     var gcd = function(a, b) {
//         if (! b) {
//             return a;
//         }
//
//         return gcd(b, a % b);
//     };
}


function bai9() {
    let str = prompt("Nhập vào chuỗi bạn muốn");
    function swap(str) {
        let newStr = "";
        for (let i = str.length - 1 ; i >= 0; i--){
            newStr += str[i];
        }
        return newStr;
    }
    alert("Chuỗi sau khi được đảo ngược là "  + swap(str));

    // cách 2
    // alert(str.split("").reverse().join(""));
    // join để mất dấu , giửa các kí tự

    function changeUpper(str){
        let newStr = ""
        for (let i = 0; i < str.length; i++){
            newStr += str[i].toUpperCase();
        }
        return newStr;
    }
    alert("Chuỗi sau khi được in hoa là " + changeUpper(str));

    //cách 2
    // alert(str.toUpperCase());

    function changeLower(str){
        let newStr = ""
        for (let i = 0; i < str.length; i++){
            newStr += str[i].toLowerCase();
        }
        return newStr;
    }
    alert("Chuỗi sau khi được in thường là " + changeLower(str));

    //cách 2
    // alert(str.toLowerCase());

    function change() {
        let newStr = "";
        for (let i = 0; i < str.length; i++){
            if (str[i] === str[i].toUpperCase()){
                newStr += str[i].toLowerCase();
            } else newStr += str[i].toUpperCase();
        }
        return newStr;
    }
    alert("Chuỗi sau khi thay đổi chữ in hoa thành chữ thường và ngược lại là " + change())
}

// đưa ra bảng tần số xuất hiện các từ ???
function bai10() {
    let str = prompt("Nhập vào chuỗi bạn muốn");
    let count = 0;
    let repeat = 0;
    for (let i = 0; i < str.length; i++){
        document.writeln(str[i] + "<br>");
        count ++;
    }
    document.writeln(count);
}


function bai11() {
    let n = parseInt(prompt("Nhập vào số phần tử trong mảng"));
    let arr = [];
    let sum = 0;
    for (let i = 0; i < n; i++){
        arr.push(parseInt(prompt("Nhập vào phần tử thứ " + (i+1))));
    }
    console.log(arr);


    // Tính tổng số dương lẻ mảng a
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0 && arr[i]%2 !== 0){
            sum += arr[i];
        }
    }
    alert("Tổng các số lẽ là " + sum);


    // Nhập phần tử k, tìm xem k có xuất hiện trong mảng a không. Nếu có chỉ ra phần tử ở vị trí đầu tiên
    let k = parseInt(prompt("Nhập vào phần tử cần tìm"));
    let location = 0;
    let checks = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === k){
            location = i;
            checks = true;
        }
    }
    if (checks){
        alert(k + " cần tìm nằm ở vị trí thứ " + location + " trong mảng");
    } else {
        alert(k + " is not in the array");
    }


    // Sắp sếp mảng a theo thứ tự tăng dần..
   arr.sort(function (a,b) {
        return a-b;
   })
    alert("Mảng sau khi được sắp xếp là array = [ " + arr + " ]");


    //Chèn phần tử p vào mảng a sao cho mảng a vẫn đảm bảo tăng dần và xuất lại mảng
    let p = parseInt(prompt("Nhập vào phần tử muốn chèn"));
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < p ){
            
        }
    }

}

