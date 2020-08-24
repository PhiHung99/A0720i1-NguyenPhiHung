
function tinhTien() {
    let customer = document.forms["formInfo"]["customer"];
    let discount = document.forms["formInfo"]["discount"];
    let service = document.forms["formInfo"]["service"];
    let room = document.forms["formInfo"]["room"];
    let check = false;
//check email
    while (!check) {
        let countAt = 0; // đếm kí tự @
        let countTa = 0; // đếm dấu .
        let email = document.forms["formInfo"]["email"];
        email = email.value;
        for (let i = 0; i < email.length; i++) {
            if (email.charAt(i) === "@") {
                countAt++;
                for (let j = i + 1; j < email.length; j++) {
                    if (email.charAt(j) === ".") {
                        countTa++;
                    }
                }
            }
        }
        if (countAt !== 1 || countTa < 1) {
            alert("Email bạn nhập sai mời bạn kiểm tra lại");
            break;
        } else {
            check = true;
        }
    }
// check id card
    check = false;
    while (!check) {
        let card = document.forms["formInfo"]["card"];
        card = card.value;
        if (!isNaN(card)) {
            card = Number.parseFloat(card);
        }
        if (!Number.isInteger(card)) {
            alert("CMND không đúng định dạng");
            break;
        }
        if (card < 100000000 || card > 999999999) {
            alert("CMND không đúng định dạng");
            break;
        } else {
            check = true;
        }
    }
//check date numberday
    check = false;
    while (!check) {
        let date = document.forms["formInfo"]["date"];
        date = date.value;
        if (date.charAt(2) === "/" && date.charAt(5) === "/") {
            let dateDay = date.substring(0, 2);
            let dateMonth = date.substring(3, 5);
            let dateYear = date.substring(6, 15);
            if (!isNaN(dateDay) && !isNaN(dateMonth) && !isNaN(dateYear)) {
                dateDay = Number.parseFloat(dateDay);
                dateYear = Number.parseFloat(dateYear);
                dateMonth = Number.parseFloat(dateMonth);
                if (Number.isInteger(dateMonth) && Number.isInteger(dateYear) && Number.isInteger(dateDay)) {
                    if (dateDay < 32 && dateMonth < 13 && dateYear > 1950 && dateYear < 2025) {
                        check = true;
                    }
                }
            }
        }
        if (!check) {
            alert("Ngày sinh không đúng định dạng");
            break;
        }
    }
//check day numberInt
    check = false;
    while (!check) {
        let day = document.forms["formInfo"]["day"];
        day = day.value;
        if (!isNaN(day)) {
            day = Number.parseFloat(day);
            if (Number.isInteger(day) && day > 0) {
                check = true;
            }
        }
        if (!check) {
            alert("Số ngày thuê không đúng ");
            break;
        }
    }
//check customer type
    check = false;
    while (!check) {
        let quantity = document.forms["formInfo"]["quantity"];
        quantity = quantity.value;
        if (!isNaN(quantity)) {
            quantity = Number.parseFloat(quantity);
            if (Number.isInteger(quantity) && quantity > 0) {
                check = true;
            }
        }
        if (!check) {
            alert("Số lượng người đi kèm không đúng");
            break;
        }
    }
// delete the space between the customer name
    let tempName = " ";
    let name = document.forms["formInfo"]["name"];
    name = name.value;
    name = name.trim().toLowerCase();
    for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) === " " && name.charAt(i + 1) === " ") {
            continue;
        }
        if (i === 0 || name.charAt(i - 1) === " ") {
            tempName += name.charAt(i).toUpperCase();
            continue;
        }
        tempName += name.charAt(i);
    }
    name = tempName;
// delete spaces and normalize the data in the address
    let tempAddress = " ";
    let address = document.forms["formInfo"]["address"];
    address = address.value;
    address = address.trim().toLowerCase();
    for (let i = 0; i < address.length; i++) {
        if (address.charAt(i) === " " && address.charAt(i + 1) === " ") {
            continue;
        }
        if (i === 0 || address.charAt(i - 1) === " ") {
            tempAddress += address.charAt(i).toUpperCase();
            continue;
        }
        tempAddress += address.charAt(i);
    }
    address = tempAddress;


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
                "<tr>" + "<td>Name:</td>" + "<td>" + name + "</td>" + "</tr>" +
                "<tr>" + "<td>ID card number:</td>" + "<td>" + card.value + "</td>" + "</tr>"+
                "<tr>" + "<td>Date of birth:</td>" + "<td>" + date.value + "</td>" + "</tr>"+
                "<tr>" + "<td>Email:</td>" + "<td>" + email.value + "</td>" + "</tr>"+
                "<tr>" + "<td>Address:</td>" + "<td>" + address + "</td>" + "</tr>"+
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
}
