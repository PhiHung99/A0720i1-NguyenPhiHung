let A = parseInt(prompt('Nhập vào số A:'));
let B = parseInt(prompt('Nhập vào số B:'));
let C = parseInt(prompt('Nhập vào số C:'));

if (A > B){
    if (A > C){
        alert(A + 'là Max');
    } else alert(C + 'là Max');
} else if (B > C){
    alert(B + "là max");
} else alert(C +' là max');