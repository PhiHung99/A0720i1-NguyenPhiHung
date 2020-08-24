function Check() {
    let old = document.getElementById("old");
    let result;
    old = parseInt(old.value);
    if(old < 120 && old > 0) {
        result = "Đây là số tuổi của 1 người";
    } else result = "Đây không phải là tuổi 1 người";
    document.getElementById("result").innerHTML = result;
}