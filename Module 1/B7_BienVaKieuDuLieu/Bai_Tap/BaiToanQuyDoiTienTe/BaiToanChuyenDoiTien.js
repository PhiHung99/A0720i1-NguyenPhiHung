function convertMoney() {
    let result = 0;
    let amount = document.getElementById("amount");
    amount = parseInt(amount.value);
    if (isNaN(amount) || amount < 0) {
        result = "Bạn đã nhập số tiền không đúng"
    } else {
        let formCurrency = document.getElementById("formCurrency");
        let toCurrency = document.getElementById("toCurrency");
        if (formCurrency.value === "USD" && toCurrency.value === "VND") {
            result = amount * 23000 + "VND";
        } else if (formCurrency.value === "VND" && toCurrency.value === "USD") {
            result = amount / 23000 + " $";
        } else
            result = "Mời bạn nhập lại";
        // alert(result)
    }
    document.getElementById("doitien").innerHTML = "Result: " + result;
}
