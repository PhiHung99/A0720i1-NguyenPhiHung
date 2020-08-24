function bai1() {
    let array = [10,15,5,14,16,18,19,2,21,7];
    let sum = 0;
    let count = 0;
    for (let i = 0; i <array.length; i++){
        if(array[i] >= 10){
            count++;
            sum = sum + array[i];
        }
    }
    alert("Có " + count + " phần tử lớn hơn hoặc bằng 10");
    alert("Tổng của các phần tử đó là" + sum);
}

function bai2() {
    let array = [10,15,5,14,16,18,19,2,21,7];
    max = array[0];
    let index;
    for(let i = 0; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    alert("số lớn nhất trong mảng:" + max);
    alert(max + " nằm ở vị trí " + index);
}

function bai3() {
    let array = [10,15,5,14,16,18,19,2,21,7,30,58,41,23,0,25,8,9,99];
    max = array[0];
    let sum = 0;
    let average = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
            sum += array[i];
            average += sum/array.length;
        }
    }
    alert("Số lớn nhất trong mảng: " + max);
    alert("Trung bình cộng của all phần tử trong mảng: " + average);

}

function bai4() {
    let array = [];
    let number = parseInt(prompt("Số lượng phần tử muốn nhập vào:"));
    for (let i = 0; i < number; i++){
        array.push(prompt("phần tử thứ " + (i+1) + " :"))
    }
    alert("các phần tử của mảng array = [ " + array + " ]");
    array.reverse();
    alert("mảng array sau khi đảo ngược array = [ " + array + " ]");

}


function bai5() {
    let stri = prompt("Nhập vào chuỗi bạn muốn");
    //nguyên âm: a o i e u
    let result = 0;
    //phụ âm: #nguyên âm trong a-z
    let count = 0;
    stri = stri.toLowerCase();
    for (let i = 0; i < stri.length; i++){
        if(stri.charAt(i) === "a" || stri.charAt(i) === "o" || stri.charAt(i) === "e" || stri.charAt(i) === "i" || stri.charAt(i) === "u"){
            result++;
        } else if(stri.charAt(i) >= "a" && stri.charAt(i) <= "z"){
            count++;
        }
    }
        alert("Số nguyên âm trong chuỗi bạn nhập là :" + result );
        alert("Số phụ âm trong chuỗi bạn nhập là :" + count );
}

function bai6() {
    let array = [];
    let number = 10;
    for (let i = 0; i < number; i++){
        array.push(prompt("Nhập vào phần tử thứ " + (i+1) + " :")); // ra chuỗi
        // array.push(parseInt(prompt("Nhập vào phần tử thứ " + (i+1) + " :"))); // ra số


    }
    let check = parseInt(prompt("Nhập vào số cần kiểm tra"));
    let checks = false;
    for (let i = 0; i < 10; i++){
        if (array[i] == check){
            checks = true;
        }
    }
    if (checks){
        alert(check + "  is in the array");
    } else {
        alert(check + " is not in the array");
    }
}


function bai7() {
    let array = [];
    let number = 10;
    for (let i = 0; i < number; i++){
        array.push(parseInt(prompt("Nhập vào phần tử thứ " + (i+1) + " :")));
    }
    let check = parseInt(prompt("Nhập vào số cần kiểm tra"));
    let checks = false;
    let index = 0;
    for (let i = 0; i < 10; i++){
        if (array[i] === check){
             checks = true;
             index = i;
             break;
            }
        }
    if (checks){
        for (let j = index; j <= array.length - 2; j++){
            array[j] = array[j + 1];
        }
    } else {
        alert(check + " is not in the array");
    }
    array[array.length - 1] = 0;
    alert(array);
}



function bai8() {
    let array = [];
    let number = 10;
    for (let i = 0 ; i < number; i++){
        array.push(prompt("Nhập vào phần tử thứ "+ (i+1)));
    }
    alert("Mảng nhập vào là array = [ " + array + " ]");
    array.sort(function (a, b)
     {
        return a-b;
    })
    alert("Mảng sau khi được sắp xếp là array = [ " + array + " ]");
}


function bai9() {
    let arrayA = [];
    let number = 10;
    for (let i = 0 ; i < number; i ++){
        arrayA.push(prompt("Nhập vào phần thử thứ "+ (i+1) + " của mảng A"))
    }
    let arrayB = [];
    for (let i = 0 ; i < number; i ++){
        arrayB.push(prompt("Nhập vào phần thử thứ "+ (i+1) + " của mảng B"))
    }
    let arrayC = [];
    let arrayConCat;
    arrayConCat = arrayC.concat(arrayA,arrayB);
    alert(arrayConCat);
}