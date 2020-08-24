function bai1() {
    function square(n) {
        let square = n * n;
        alert(square);
    }
    let number = parseFloat(prompt("Nhập vào số cần tính bình phương"));
    if (isNaN(number)){
        alert("Bạn chưa nhập gì hoặc nhập sai số, mời bạn nhập lại")
    } else {
    square(number);}
}

function bai2() {
    let PI = 3.14;
    function acreage(r) {
        let acreage = r*r*PI;
        alert("Diện tích: " + acreage);
    }
    function perimeter(r) {
        let perimeter = 2*r*PI;
        alert("Chu vi: " + perimeter);
    }
    let radius = parseFloat(prompt("Nhập vào bán kính hình tròn"));
    if (isNaN(radius) || radius < 0){
        alert("Bạn nhập sai or chưa nhập bán kính, mời nhập lại");
    }else {
        acreage(radius);
        perimeter(radius);
    }
}


function bai3() {
    let number = parseInt(prompt("Nhập vào số bạn muốn tính giai thừa"));
    let count = 1;
    function factorial(n) {
        for (let i = 1; i <= n; i++) {
            count = count*i;
        }
        alert(count);
    }
    if (isNaN(number)){
        alert("Bạn nhập sai hay chưa nhập gì kìa !! hihi")
    }else factorial(number);
}


function bai4() {
    let check = prompt("Nhập vào 1 kí tự muốn kiểm tra");
    function characters(n) {
        return !isNaN(parseFloat(n)) && !isNaN(n - 0);
    }
    alert(characters(check));
//    regex: return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}


function bai5() {
    let number1 = parseFloat(prompt("Nhập vào số thứ 1:"));
    let number2 = parseFloat(prompt("Nhập vào số thứ 2:"));
    let number3 = parseFloat(prompt("Nhập vào số thứ 3:"));
    function check(a,b,c) {
        if (a>b){
            if(a<c){
                return c + " là max";
            } else return a + " là max";
        } else if (b > c){
            return b + " là max";
        } else return c + " là max";
    }
    alert(check(number2, number1, number3));
}


function bai6() {
    let number = parseInt(prompt("Nhập vào số nguyên cần kiểm tra"));
    function check(n) {
        if (n >= 0){
            return n + " là số nguyên dương"
        } else return n + " không là số nguyên dương"
    }
    if (isNaN(number)){
        alert("Bạn nhập sai số or chưa nhập kìa, nhập lại đi hihi");
    }else alert(check(number));

}


function bai7() {
    let number1 = parseInt(prompt("Nhập số thứ 1:"))
    let number2 = parseInt(prompt("Nhập số thứ 2:"))

    function taste(n,m) {
        let temp = n;
            n = m;
            m = temp;
            return "số thứ 1 là " +  n + " và số thứ 2 là " + m;
    }
    if (isNaN(number2) || isNaN(number1)){
        alert("Bạn chưa nhập hoặc nhập sai số nào kìa, kiểm tra lại đi !!")
    } else alert(taste(number1,number2));
}

function bai8() {
    let arr = [];
    let number = parseInt(prompt("Nhập vào số phần tử trong mảng:"));
    if (isNaN(number) || number < 0){
        alert("Bạn nhập sai hay chưa nhập kìa !!")
    } else {
        for (let i = 0; i < number; i++) {
            arr.push(prompt("Nhập vào số nguyên thứ " + (i + 1)))
        }
        alert(arr);
        arr.reverse();
        alert("Mảng sau khi đảo ngược arr = [ " + arr + " ]")
    }
}


function bai9() {
    let arr = [];
    let number = parseInt(prompt("Nhập vào số phần tử trong mảng:"));
    if (isNaN(number) || number < 0){
        alert("Bạn nhập sai hay chưa nhập kìa !!")
    } else {
        for (let i = 0; i < number; i++) {
            arr.push(parseInt(prompt("Nhập vào số nguyên thứ " + (i + 1))));
        }
        alert(arr);
        let checkarr = parseInt(prompt("Nhập vào phần tử cần tìm:"));
        let count = 0;
        let check = false;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === checkarr){
                check = true;
               count = count + 1;
            }
        }
        if (check === true){
            alert("Có " + count + " phần tử " + checkarr);
        } else alert("Phần tử bạn tìm k có trong mảng");
    }

}