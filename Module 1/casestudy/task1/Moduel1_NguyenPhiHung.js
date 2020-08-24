
function tinhTien() {
    let price;
    switch (service.value) {
        case "V":
            price=500;
            break;
        case "H":
            price= 100;
            break;
        case "R":
            price= 300;
            break;
    }
    let day = document.getElementById("day");
    day = parseInt(day.value);
    let discount = document.getElementById("discount");
    discount = parseInt(discount.value);
    let S;
    S=((day*price)-((day*price)*(discount/100)));
    document.getElementById("tong").innerHTML = "Tổng tiền sau discount la " + S;
//    task1
}
