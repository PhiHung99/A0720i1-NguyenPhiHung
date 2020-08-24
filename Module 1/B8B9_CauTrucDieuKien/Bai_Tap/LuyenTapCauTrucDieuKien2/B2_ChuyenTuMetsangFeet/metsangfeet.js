function convertMoney() {
    let result = 0;
    let amount = document.getElementById("amount");
    amount = parseFloat(amount.value);
    if (isNaN(amount) || amount < 0) {
        result = "Bạn đã nhập không đúng"
    } else {
        let form = document.getElementById("form");
        let to = document.getElementById("to");
        if (form.value === "m" && to.value === "f") {
            result = amount * 3.2808;
        } else if (form.value === "f" && to.value === "m") {
            result = amount / 3.2808;
        } else
            result = "Mời bạn nhập lại";
        // alert(result)
    }
    document.getElementById("quydoi").innerHTML = "Result: " + result;
}
