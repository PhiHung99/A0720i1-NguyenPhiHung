function acreage() {
    let amount = document.getElementById("amount");
    amount = parseFloat(amount.value);
    let S;
    if(isNaN(amount) || amount < 0){
        S = "Bạn nhập sai, mời nhập lại"
    } else
    S = amount*amount;
    document.getElementById("result").innerHTML = "Diện tích hình vuông là: " + S;
}