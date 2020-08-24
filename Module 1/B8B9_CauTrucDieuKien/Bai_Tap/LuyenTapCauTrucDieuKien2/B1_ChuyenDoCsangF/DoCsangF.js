function chuyendoi() {
    let result = 0;
    let amount = document.getElementById("amount");
    amount = parseInt(amount.value);
    if (isNaN(amount)){
        result = "Mời bạn nhập giá trị quy đổi"
    } else {
        let to = document.getElementById("to");
        let from = document.getElementById("from");
        if (from.value === "C" && to.value === "F") {
            result = amount * 9 / 5 + 32 + "F";
            // alert(result);
        } else if (from.value === "F" && to.value === "C") {
            result = amount * 5 / 9 - 32 + "C";
            // alert(result);
        } else result = "mời bạn nhập lại";
    }
    document.getElementById("quydoi").innerHTML = "Result:" +  result;
}