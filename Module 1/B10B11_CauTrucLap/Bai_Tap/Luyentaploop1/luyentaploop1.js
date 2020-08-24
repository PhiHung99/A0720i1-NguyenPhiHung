function bai1() {
    let x = 0;
    for (let i=1; i < 100; i++){
       x = i;
       document.writeln(x);
        if (x == 99){
            document.writeln("hoành thành")
        }
    }
}



function bai2() {
    let temp = prompt("Nhập vào nhiệt độ:");
    if ( temp > 100){
        document.writeln("Giảm nhiệt độ");
    } else if( temp < 20 ) {
        document.writeln("Tăng nhiệt độ");
    } else document.writeln("Bình thường");
}




function bai3() {
    let a1 = 1;
    let a = 1;
    let temp;
    let result = a1 + " " + a + " ";
    let count = 2;
    while (count <= 20){
            temp = a + a1;
            a = a1;
            a1 =temp;
            result += temp + " ";
            count++;
    }   document.writeln(result);
    let x = [1,2,4];
    console.log(x);
}




function bai4() {
    let a1 = 1;
    let a = 1;
    let temp;
    let count = 2;
    while (count <= 20){
        temp = a + a1;
        a = a1;
        a1 = temp;
        if(temp % 5 === 0){
            document.writeln(temp);
            return;
        }
        count++;
    }
}

function bai5() {
    let a1 = 1;
    let a = 1;
    let temp;
    let count = 2;
    let result = a1 + a;
    while (count <= 20){
        temp = a + a1;
        a = a1;
        a1 = temp;
        result += temp;
        count++;
    } document.writeln(result);
}




function bai6() {
    let i = 7;
    let sum=0;
    while (i <= 210){
        document.writeln(i);
        sum += i;
        i+=7;
    } document.writeln("<br>"+"tổng 3O số đầu tiên chia hết cho 7 là: " + sum);
}



function bai7() {
    for(let i = 1; i <=100; i++){
        let output = '' + '<br>';
        if((i % 3 === 0) && (i% 5 === 0)) {
            output += 'FizzBuzz';
        } else
        if(i % 5 === 0){
            output += 'Buzz';
          } else
        if (i % 3 === 0){
              output += 'Fizz';
          } else output += i;
          document.writeln(output);
    }
}


function bai8() {
    let num = parseInt(prompt("Số bạn muốn đoán trong khoảng từ"));
    // alert(num);
    let num1 = parseInt(prompt("Đến"));
    // alert(num1);
    let rand1;

    //  công thức random 1 số trong khoảng min,max
    //  Math.floor(Math.random() * (max - min + 1)) + min;

    rand1 =  Math.floor(Math.random() * (num1 - num + 1)) + num;
    // alert(rand1);

    let num2 = parseInt(prompt("Số bạn đoán là"));

    while (rand1 !== num2){
        if(num2 < num || num2 > num1){
            alert("Số bạn đoán không nằm trong khoảng đã cho");
            num2 = parseInt(prompt("Số bạn đoán là"));
        } else if(num2 < rand1) {
            alert("Số bạn đoán nhỏ quá rồi ");
            num2 = parseInt(prompt("Số bạn đoán là"));
        } else {
            alert("Số bạn đoán lớn quá rồi");
            num2 = parseInt(prompt("Số bạn đoán là"));
        }
    } document.writeln("Chúc mừng bạn đã đoán đúng")
}
