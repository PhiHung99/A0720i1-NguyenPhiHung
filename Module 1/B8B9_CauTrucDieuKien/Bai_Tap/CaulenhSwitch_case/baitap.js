function numberDay() {
    let result = document.getElementById("month").value;
    // alert(result);
    let dates;
    switch (result) {
        case '1':
            dates = "Tháng 1 có 31 ngày";
            break;
        case '2':
            dates = "Tháng 2 có 28 hoặc 29 ngày";
            break;
        case '3':
            dates = "Tháng 3 có 30 ngày";
            break;
        case '4':
            dates = "Tháng 4 có 30 ngày";
            break;
        case '5':
            dates = "Tháng 5 có 31 ngày";
            break;
        case '6':
            dates = "Tháng 6 có 29 ngày";
            break;
        case '7':
            dates = "Tháng 7 có 31 ngày";
            break;
        case '8':
            dates = "Tháng 8 có 30 ngày";
            break;
        case '9':
            dates = "Tháng 9 có 30 ngày";
            break;
        case '10':
            dates = "Tháng 10 có 31 ngày";
            break;
        case '11':
            dates = "Tháng 11 có 30 ngày";
            break;
        case '12':
            dates = "Tháng 12 có 31 ngày";
    }
    document.getElementById("date").innerHTML = dates;
}