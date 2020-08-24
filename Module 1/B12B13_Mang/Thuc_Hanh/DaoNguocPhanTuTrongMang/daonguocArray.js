// cách 1

let x = [-3,5,1,3,2,10];
let first = 0;
let last = x.length - 1;
for(;first < last; first++){
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    last--;
} document.writeln("Mảng sau khi đảo ngược là: " + x);


//cách 2

// let x = [-3,5,1,3,2,10];
// let f = x.reverse();
// document.writeln(f);



// test
// let x = 0;
// let array = Array();
//
// function addArray() {
//     array[x] = document.getElementById("import").value;
//     x++;
//     document.getElementById("import").value = "";
// }
//
// function displayArray() {
//     let e = "<hr>";
//     let f;
//     for (let i = 0 ; i < array.length; i++){
//         // e += "Element: " + i + " = " + array[i] + "<br>";
//         e += array[i] + "<br>";
//     } document.getElementById("result").innerHTML = " x = " + e;
//
// }