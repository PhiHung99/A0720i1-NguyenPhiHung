function bai1() {
    let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for (let i = 0 ; i < array.length; i++){
            document.writeln("row " + i + "<br>");
        for (let j = 0; j < array[i].length; j++){
            document.writeln("" + a[i][j] + "<br>");
        }
    }
}

function bai2() {
    let array = [];
    let number = parseInt(prompt("Số kí tự bạn muốn nhập: "));
    for (let i = 0; i < number; i++){
        array.push(prompt("Nhập vào kí tự thứ " + (i+1)));
    }
    alert("array = [ " + array + " ]");
    array.reverse();
    alert("các kí tự sau khi đảo ngược là " + array.join(""));
}


function bai3() {
    let array = [];
    let number = parseInt(prompt("Số kí tự bạn muốn nhập: "));
    let count = 0;
    for (let i = 0; i < number; i++) {
        array.push(parseInt(prompt("Nhập vào kí tự thứ " + (i+1))));
    }
    for (let j = 0; j < array.length; j ++){
        if (!isNaN(array[j])){
            count = count + 1;
        }
    }
    alert("Số kí tự số là: " + count);
}


function bai4() {
    let str = prompt("Nhập vào chuỗi bạn muốn");
    let testSupper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let testSlower = 'abcdefghijklmnopqrstuvwxyz';
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (testSupper.indexOf(str[i]) !== -1 || testSlower.indexOf(str[i]) !== -1){
            count++;
        }
    }
    alert(count);
}

function bai5() {
    let strOne = prompt("Nhập vào chuỗi thứ nhất:");
    let strTwo = prompt("Nhập vào chuỗi thứ hai:");
    let check = true;
    let n = 0;
    while (n <= strOne.length-1) {
        if(strOne[n]  !== strTwo[n]) {
            check = false;
            break;
        }
        n++;
    }
    if (check === true){
        alert("2 chuỗi giống nhau");
    } else
        alert("2 chuỗi khác nhau");
}


function bai6() {
    let arr = [];
    let number = parseInt(prompt("Nhập vào số ký tự trong mảng:"));
    if (isNaN(number) || number < 0){
        alert("Bạn nhập sai hay chưa nhập kìa !!")
    } else {
        for (let i = 0; i < number; i++) {
            arr.push((prompt("Nhập vào số nguyên thứ " + (i + 1))));
        }
        alert(arr);
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === "-"){
                arr[i] = "_"
            }
        } alert(arr);
    }

}