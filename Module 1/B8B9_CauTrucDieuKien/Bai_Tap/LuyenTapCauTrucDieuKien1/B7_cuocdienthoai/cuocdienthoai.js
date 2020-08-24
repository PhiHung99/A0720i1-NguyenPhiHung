function tongtien() {
    let time = document.getElementById("time");
    time = parseFloat(time.value);
    let result;
    if(time <= 6){
        result = 79;
        // alert(result);
    } else if(time < 60){
        result = 79 + ((time-6)*13.83);
        // alert(result);
    } else result = (time/60)*790;
    document.getElementById("result").innerHTML = "Tiền Cước Điện Thoại là: " + result;
}