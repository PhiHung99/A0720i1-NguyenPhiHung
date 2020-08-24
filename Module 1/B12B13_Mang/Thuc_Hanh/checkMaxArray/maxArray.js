let x = [20, 5, 1, 3, 11, 10];
let index = 0;
let max = x[0];
for(let i =0; i < x.length; i++){
    if(x[i] > max){
        max = x[i];
        index  = i;
    }
} document.writeln( "Max là " + max + " nằm ở vị trí " + index + " trong mảng");