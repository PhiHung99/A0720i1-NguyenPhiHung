let year = parseInt(prompt("Nhập vào năm cần kiểm tra"));
//
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             alert(year + "Đó là năm nhuận");
//         } else {
//             alert(year + "Đó không là năm nhuận");
//         }
//     } else {
//         alert(year + "Đó là năm nhuận");
//     }
// } else {
//         alert(year + "Đó không là năm nhuận");
//     }
let isLeapYear = false;

let isDivisibleBy4 = year % 4 == 0;
if (isDivisibleBy4) {
    let isDivisibleBy100 = year % 100 == 0;
    if (isDivisibleBy100) {
        let isDivisibleBy400 = year % 400 == 0;
        if (isDivisibleBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
}