function bai1() {
    let a = 1;
    let a1 = 1;
    let temp;
    let result = a + ' ' + a1 + ' ';
    let num1 = parseInt(prompt("Nhập vào dãy Finonaci muốn hiển thị"));
    let count = 2;
    while(count <= num1){
        
        //             a    a1    temp
        //     a      a1   temp
        // a   a1    temp
        // 1   1      2      3     5
        
        temp = a + a1;
        a = a1;
        a1 = temp;
        result += temp + ' ';
        count++;
    } document.writeln(result);
}



function bai2() {
    let num = parseInt(prompt("Nhập vào số nguyên dương bạn muốn tính:"));
    // n: gia thừa
    // n! = 1.2.3.4...n
    let n = 1;
    for(let i = 1; i <= num; i++){
        n = n*i;
    } alert(n);

}



function bai3() {
    for (let i= 1; i <= 5; i++){
        for (let  j = 1; j <= i;j++){
            document.writeln("*");
        }
        document.writeln("<br>");
    }
    document.writeln("<br>");


    for (let i= 5; i >= 1; i--){
        for (let  j = 1; j <= i;j++){
            document.writeln("*");
        }
        document.writeln("<br>");
    }
    document.writeln("<br>");

    for (let i= 1; i <= 5; i++){
        for (let  j = 1; j <= i;j++){
            document.writeln("&nbsp&nbsp");
        }
        for (let  k = 1; k<=6-i;k++){
            document.writeln("*");
        }
        document.writeln("<br>");
    }
    document.writeln("<br>");

    for (let i= 5; i >= 1; i--){
        for (let  j = 1; j <= i;j++){
            document.writeln("&nbsp&nbsp");
        }
        for (let  k = 1; k <= 6 -i ;k++){
            document.writeln("*");
        }
        document.writeln("<br>");
    }
    document.writeln("<br>");
}




function bai4() {
    let d = parseInt(prompt("Nhập vào chiều dài:"))
    let r = parseInt(prompt("Nhập vào chiều rộng:"))
    for(let i = 1; i <= r; i++)
    {
        for (let j = 1; j <= d; j++)
        {
            if (i == 1 || j == 1 || i == r || j == d){
                document.writeln("*");
            } else document.writeln("&nbsp&nbsp");
            // &nbsp là khoảng cách
        }
        document.writeln("<br>");
    }
}


function bai5() {
    let money = parseInt(prompt("Nhập vào số tiền muốn vay:"));
    let time = parseInt(prompt("Nhập vào thời gian vay (năm):"));
    let rate = parseInt(prompt("Nhập vào lãi suất cho vay (%):"));
    let interest;
    interest = money * Math.pow((1 + (rate/100)),time);
    alert(interest);
}

function bai6() {
    {
        // HERE, we have set the size of Heart, size = 10
        let a, b, size = 15;

        /* FOR THE APEX OF HEART */
        for (a = size/2; a <= size; a = a+2)
        {
            // FOR SPACE BEFORE PEAK-1 : PART 1
            for (b = 1; b < size-a; b = b+2) {
                document.writeln(" ");
            }

            // FOR PRINTING PEAK-1 : PART 2
            for (b = 1; b <= a; b++) {
                document.writeln("*");
            }

            // FOR SPACE B/W PEAK-1 AND PEAK-2 : PART 3
            for (b = 1; b <= size-a; b++) {
                document.writeln(" ");
            }

            // FOR PRINTING PEAK-2 : PART 4
            for (b = 1; b <= a-1; b++) {
                document.writeln("*");
            }

            document.writeln("<br>");
        }

        /*FOR THE BASE OF HEART ie. THE INVERTED TRIANGLE */

        for (a = size; a >= 0; a--)
        {
            // FOR SPACE BEFORE THE INVERTED TRIANGLE : PART 5
            for (b = a; b < size; b++) {
                document.writeln(" ");
            }

            // FOR PRINTING THE BASE OF TRIANGLE : PART 6
            for (b = 1; b <= ((a * 2) - 1); b++) {
                document.writeln("*");
            }
            document.writeln("<br>");
        }
    }

}