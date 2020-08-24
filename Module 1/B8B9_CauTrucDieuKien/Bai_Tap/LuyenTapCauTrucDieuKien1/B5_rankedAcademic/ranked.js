// let pointCheck = parseInt(prompt('Nhập vào điểm kiểm tra:'));
// let pointMid = parseInt(prompt('Nhập vào điểm thi giữa kì:'));
// let pointEnd = parseInt(prompt('Nhập vào điểm thi cuối kì:'));
function average() {
    let pointCheck = document.getElementById("check");
    pointCheck = parseFloat(pointCheck.value);
    // alert(pointCheck);
    let pointMid = document.getElementById("mid");
    pointMid = parseFloat(pointMid.value);
    // alert(pointMid);
    let pointEnd = document.getElementById("end");
    pointEnd = parseFloat(pointEnd.value);
    // alert(pointEnd);
    let result = 0;
    aver = (pointEnd + pointCheck + pointMid)/3;
    // alert(aver);
    if (isNaN(pointEnd) && isNaN(pointMid) && isNaN(pointCheck)  || (pointEnd < 0 || pointMid < 0 || pointCheck < 0)){
        result = "Bạn đã nhập sai điểm, hãy kiểm tra lại";
    } else
        if (aver < 5){
            result = "Thành tích của bạn yếu";
        } else
            if (aver <= 6.5){
            result = "Thành tích của bạn trung bình";
        } else
            if(aver <= 8){
                result = "Thành tích của bạn Khá";
        } else result = "Thành tích của bạn tốt";
            document.getElementById("thanhtich").innerHTML = result;
}