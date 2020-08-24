let temp = false;
let ketQua = document.getElementById("ketQua");
function nhap(so) {
    if(so != '+' && so != '-' && so != '*' && so != '/'){
        if(temp){
            xoaGiaTri();
        }
    }
    temp = false;
    ketQua.value = ketQua.value + so;
}
function tinhToan() {
    ketQua.value = eval(ketQua.value);
    temp = true;
}
function xoaGiaTri() {
    ketQua.value = "";
}