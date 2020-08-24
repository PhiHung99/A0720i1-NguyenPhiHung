function tempF(TempNum) {
    TempNum = parseFloat(TempNum);
    if (isNaN(TempNum)){
        document.getElementById("result").innerHTML = "Mời bạn nhập giá trị"
    } else
        document.getElementById('result').innerHTML = (TempNum-32) / 1.8;
}