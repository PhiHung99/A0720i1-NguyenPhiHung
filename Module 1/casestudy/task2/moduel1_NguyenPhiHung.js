
// function tinhTien() {
//     let price;
//     switch (service.value) {
//         case "Villa":
//             price=500;
//             break;
//         case "House":
//             price= 100;
//             break;
//         case "Room":
//             price= 300;
//             break;
//     }
//     let day = document.getElementById("day");
//     day = parseInt(day.value);
//     let discount = document.getElementById("discount");
//     discount = parseInt(discount.value);
//     let S;
//     S=((day*price)-((day*price)*(discount/100)));
//     document.getElementById("tong").innerHTML = "Tổng tiền sau discount la " + S;
// //    task1
// }

//kiểm tra dữ liệu đã nhập hay chưa
let check = true;

//lấy dử liệu từ froms
let name = document.forms["formInfo"]["name"];
let card = document.forms["formInfo"]["card"];
let date = document.forms["formInfo"]["date"];
let email = document.forms["formInfo"]["card"];
let address = document.forms["formInfo"]["address"];
let customer = document.forms["formInfo"]["customer"];
let discount = document.forms["formInfo"]["discount"];
let quantity = document.forms["formInfo"]["quantity"];
let day = document.forms["formInfo"]["day"];
let service = document.forms["formInfo"]["service"];
let room = document.forms["formInfo"]["room"];

function tinhTien() {
    let option = prompt("Please choose:\n1.Show Information Customer.\n2.Edit Information Customer.\n3.Show the amount to be paid after discount")
    switch(option){
        case '1':{
            showInfor();
            break;
        }
        case '2':{
            break;
        }
        case '3':{
            showAmount();
            break;
        }
    }
}

function showInfor() {
    if (name.value === "" || card.value === ""  || date.value === ""  || email.value === ""  ||
        address.value === ""  || customer.value === ""|| quantity.value === ""  ||
        day.value === ""  || service.value === ""  || room.value  === "" ){
        check = false;
        alert("You must enter all value")
    } else {
        document.getElementById("out").innerHTML =
            "<h2>Thông tin khách hàng</h2><br>" +
            "<table>" +
            "<tr>" + "<td>Name:</td>" + "<td>" + name.value + "</td>" + "</tr>" +
            "<tr>" + "<td>ID card number:</td>" + "<td>" + card.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Date of birth:</td>" + "<td>" + date.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Email:</td>" + "<td>" + email.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Address:</td>" + "<td>" + address.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Customer:</td>" + "<td>" + customer.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Discount:</td>" + "<td>" + discount.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Quantity comes:</td>" + "<td>" + quantity.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Number of rental days:</td>" + "<td>" + day.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Type of service:</td>" + "<td>" + service.value + "</td>" + "</tr>"+
            "<tr>" + "<td>Type of room for rent:</td>" + "<td>" + room.value + "</td>" + "</tr>"+
            "</table>";
    }
}

function showAmount() {
// tổng số tiền giảm giá
    let discount = 0;
//    giá dịch vụ
    let priceServices = 0;
//    giảm giá theo địa chỉ
    let discountAddress = 0;
//    giảm giá theo số ngày thuê
    let discountDay = 0;
//    giảm giá theo loại khách hàng
    let discountCustomer = 0;
//    tổng tiền
    let sumMoney = 0;

//    theo giá dịch vụ
    switch (service.value) {
        case "Villa": priceServices = 500;
            break;
        case "House":  priceServices = 300;
            break;
        case "Room":  priceServices = 100;
            break;
    }

//   giảm theo địa chỉ
    switch (address.value) {
        case "Đà Nẵng":  discountAddress= 20;
            break;
        case "Huế": discountAddress = 10;
            break;
        case "Quảng Nam": discountAddress = 5;
            break;
    }

//   giảm theo số ngày thuê phòng
    if(day.value > 7){
        discountDay = 30;
    } else if(day.value > 5){
        discountDay = 20;
    } else if (day.value > 2){
        discountDay = 10;
    } else discountDay = 0;

//    giảm theo loại khách hàng
    switch (customer.value) {
        case"Diamond": discountCustomer = 15;
        break;
        case "Platinum": discountCustomer =  10;
        break;
        case "Gold": discountCustomer = 5;
        break;
        case "Silver": discountCustomer = 2;
    }


//    tổng tiền giảm giá
    discount = discountCustomer + discountDay + discountAddress;

//      tổng tiền sau giảm giá
    sumMoney = priceServices * day.value - discount;

    showInfor();
    if (check){
        document.getElementById("disc").innerHTML =
            "<h2>Thông tin giảm giả và thanh toán</h2><br>" +
            "<table>" +
            "<tr>" + "<td>Prives of services:</td>" + "<td>" + priceServices + '$' + "</td>" + "</tr>" +
            "<tr>" + "<td>Rendays:</td>" + "<td>" + day.value + 'days' + "</td>" + "</tr>"+
            "<tr>" + "<td>Discount by address:</td>" + "<td>" + discountAddress + '$' +  "</td>" + "</tr>"+
            "<tr>" + "<td>Discount by rendays:</td>" + "<td>" + discountDay + '$' + "</td>" + "</tr>"+
            "<tr>" + "<td>Discount by type of customer:</td>" + "<td>" + discountCustomer + '$' + "</td>" + "</tr>"+
            "<tr>" + "<td>Discount:</td>" + "<td>" + discount + '$' + "</td>" + "</tr>"+
            "<tr>" + "<td>Totol of money:</td>" + "<td>" + sumMoney + '$' + "</td>" + "</tr>"
    }
}