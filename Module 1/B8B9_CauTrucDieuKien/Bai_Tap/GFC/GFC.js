let Good = document.getElementById("good");
let Cheap = document.getElementById("cheap");
let Fast = document.getElementById("fast");
// let Fast = document.getElementById("fast");
// Không chấm phía sau nếu không nó sẽ mặc định false; k đưa vào trong function () được



function switchGood() {
    console.log(Good,Cheap,Fast);
    if (Cheap.checked && Fast.checked) {
        document.getElementById("fast").checked = false;
    }
}
function switchCheap() {
    console.log(Good,Cheap,Fast);
    if (Good.checked && Fast.checked) {
        document.getElementById("good").checked = false;
    }
}
function switchFast() {
    console.log(Good,Cheap,Fast);
    if (Good.checked && Cheap.checked) {
            document.getElementById("cheap").checked = false;
        }
}


// let good=document.getElementById("good");
// let fast=document.getElementById("fast");
// let cheap=document.getElementById("cheap");
// function check(option) {
//     switch(option) {
//         case 1: {
//             if(fast.checked && cheap.checked) {
//                 fast.checked=false;
//             }
//             break;
//         }
//         case 2: {
//             if(good.checked && cheap.checked) {
//                 cheap.checked=false;
//             }
//             break;
//         }
//         case 3: {
//             if(fast.checked && good.checked) {
//                 good.checked=false;
//             }
//             break;
//         }
//     }
// }
