function bai1() {
    function alertMessage() {
        alert("Xin Chào");
    }
    alertMessage();
}



function bai2() {
    let number = parseInt(prompt("Nhập vào giá trị"));
    function num(n) {
        let sum =  n + 1;
        alert(sum);
    }
    num(number);
}


function bai3() {
    let number1 = parseFloat(prompt("Nhập vào số thứ 1"));
    let number2 = parseFloat(prompt("Nhập vào số thứ 2"));
    function sum(a,b) {
        return a + b;
    }
    if (isNaN(number1) || isNaN(number2)){
        alert("Bạn nhập sai, mời kiểm tra lại");
    } else {
        if (number1 > number2) {
            alert("Số thứ 1 lớn hơn số thứ 2");
        } else alert(sum(number1, number2));
    }
}


function bai4() {
    function addNumbers() {
        let firstNum = 4;
        let secondNum = 8;
        let result = firstNum + secondNum;
        return result;
    }
    let result = 0;
    alert("Khi chưa gọi hàm: " + result);
    result = addNumbers();
    alert("Khi gọi hàm: " + result);
}


function bai5() {
    let arr1 = ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"];
    let arr2 = ["Ursa Minor","Tarurus","Cygnus","Lyra","Aquila","Ursa Major","Leo"];
    let checkarr = prompt("Nhập vào tên ngôi sao cần tìm giá trị tương ứng:");
    let check = false;
    let index = 0;
    for (let i = 0; i < arr1.length; i++){
        if (checkarr === arr1[i]){
            check = true;
            index = i;
            break;
        }
    }
    if (check){
        alert(arr2[index]);
    } else alert("Ohh No!! Hình Như bạn nhập sai tên ngôi sao rồi ?")
}