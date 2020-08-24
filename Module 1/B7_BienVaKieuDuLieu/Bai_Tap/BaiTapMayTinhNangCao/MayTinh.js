let ketQua = document.getElementById("ketQua");
function nhap(so) {
    ketQua.value = ketQua.value + so;
}
function tinhToan() {
    ketQua.value = eval(ketQua.value);
//    eval: Hàm tính toán
}
function xoaGiaTri() {
    ketQua.value = "";
}

