// từ 0-200: 3%; 200-500: 5%; trên 500: 10%;
// 200*3% + (500-200)*5% + (700-500)*10% (ví dụ hóa đơn 700k)
function doanhso() {
    let result;
    let hoahong = document.getElementById("hoahong");
    hoahong = parseInt(hoahong.value);
    alert(hoahong);
    if(hoahong <= 200){
        result = hoahong*0.03;
    } else if(hoahong <= 500){
        result = 200*0.03 + (hoahong-200)*0.05;
    } else result = 200*0.03 + (500-200)*0.05 + (hoahong-500)*0.1;
    document.getElementById("result").innerHTML = "Là " +  result + ".000";
}
