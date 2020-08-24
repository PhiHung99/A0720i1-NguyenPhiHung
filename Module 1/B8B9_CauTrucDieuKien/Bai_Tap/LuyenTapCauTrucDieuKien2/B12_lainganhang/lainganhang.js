function result() {
    let money = document.getElementById("money");
    let time = document.getElementById("time");
    let rate = document.getElementById("rate");
    money = parseFloat(money.value);
    time =  parseFloat(time.value);
    rate = parseFloat(rate.value);
    let interest;
    interest = money * Math.pow((1 + (rate/100)),time);
    document.getElementById("result").innerHTML = interest - money;
}