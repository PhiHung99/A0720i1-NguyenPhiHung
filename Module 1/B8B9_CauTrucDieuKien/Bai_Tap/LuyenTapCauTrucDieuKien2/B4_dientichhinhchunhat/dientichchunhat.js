function acreage() {
    let edgea = document.getElementById("edgea");
    edgea = parseFloat(edgea.value);
    // alert(edgea);
    let edgeb = document.getElementById("edgeb");
    edgeb = parseFloat(edgeb.value);
    // alert(edgeb);
    let S;
    if (isNaN(edgea) || edgeb < 0){
        S = "Bạn nhập sai cạnh a"
    } else if(isNaN(edgeb) || edgeb < 0){
        S = "Bạn nhập sai cạnh b"
    } else
    S =edgeb * edgea;
    document.getElementById("result").innerHTML = "Diện tích hình chữ nhật: " + S;
}