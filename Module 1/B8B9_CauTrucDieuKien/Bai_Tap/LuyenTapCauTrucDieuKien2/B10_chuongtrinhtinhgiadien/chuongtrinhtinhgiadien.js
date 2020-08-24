function result() {
    let num1 = document.getElementById("num1").textContent;
    let num2 = document.getElementById("num2").textContent;
    let num3 = document.getElementById("num3").textContent;
    let num4 = document.getElementById("num4").textContent;
    let num5 = document.getElementById("num5").textContent;
    let num6 = document.getElementById("num6").textContent;
    let num = document.getElementById("num");
    num =  parseFloat(num.value);
    let S;
    if(isNaN(num) || num < 0){
        S = "Bạn nhập sai, mời kiểm tra và nhập lại";
    }else
    if(num > 0 && num <= 50){
        S = num * num1;
    } else if(num <= 100){
        S = num * num2;
    } else if(num <= 200){
        S = num * num3;
    } else if(num <= 300){
        S = num * num4;
    } else if(num <= 400){
        S = num * num5;
    } else S = num * num6;
    document.getElementById("result").innerHTML = "Tiền điện tháng này là: " + S;
}