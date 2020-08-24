function result() {
    let money = document.getElementById("money");
    money = parseFloat(money.value);
    let S;
    if(isNaN(money) || money < 0){
        S = "Bạn nhập sai, mời bạn nhập lại";
    } else
    if(money <= 5000000){
        S = "Lương của bạn là: " + money + " mức thuế 5%. " +
            "Thuế thu nhập bạn phải trả là:" + (money*0.05);
    }else if(money <= 10000000){
        S = "Lương của bạn là: " + money + " mức thuế 10%. " +
            "Thuế thu nhập bạn phải trả là:" + ((money*0.1) + 250000);
    } else if (money <= 18000000){
        S = "Lương của bạn là: " + money + " mức thuế 15%. " +
            "Thuế thu nhập bạn phải trả là:" + ((money*0.15)+750000);
    }else if (money <= 32000000) {
        S = "Lương của bạn là: " + money + " mức thuế 20%. " +
            "Thuế thu nhập bạn phải trả là:" + ((money * 0.2) + 1625000);
    }else if (money <= 52000000) {
        S = "Lương của bạn là: " + money + " mức thuế 25%. " +
            "Thuế thu nhập bạn phải trả là:" + ((money * 0.25) + 3250000);
    }else if (money <= 80000000) {
        S = "Lương của bạn là: " + money + " mức thuế 30%. " +
            "Thuế thu nhập bạn phải trả là:" + ((money * 0.3) + 5850000);
    } else S = "Lương của bạn là: " + money + " mức thuế 35%. " +
            "Thuế thu nhập bạn phải trả là:" + ((money*0.35) + 9850000);
    document.getElementById("result").innerHTML = S;
}