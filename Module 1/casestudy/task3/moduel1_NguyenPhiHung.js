// task3 "yêu cầu 1"

function tinhTien() {
//lấy dử liệu từ froms
//     let name = document.forms["formInfo"]["name"];
    // let card = document.forms["formInfo"]["card"];
    // let date = document.forms["formInfo"]["date"];
    // let email = document.forms["formInfo"]["email"];
    // let address = document.forms["formInfo"]["address"];
    let customer = document.forms["formInfo"]["customer"];
    let discount = document.forms["formInfo"]["discount"];
    // let quantity = document.forms["formInfo"]["quantity"];
    // let day = document.forms["formInfo"]["day"];
    let service = document.forms["formInfo"]["service"];
    let room = document.forms["formInfo"]["room"];

//khai báo biển để kiểm tra đúng hay k chuỗi nhập vào
    let check = false;

// kiểm tra email nhập vào có đúng không
    while (!check) {
        let countAt = 0; // đếm kí tự @
        let countTa = 0; // đếm dấu .
        let email = document.forms["formInfo"]["email"];
        email = email.value;
        for (let i = 0; i < email.length; i++) {
            if (email.charAt(i) === "@") //charAt() "lấy ra phần tử thứ i trong 1 chuỗi để kiểm tra"
            {  //kiểm tra kí tự @
                countAt++;
                //j = i + 1 => vì cần kiểm tra dấu chấm phía sau @ mà @ là vị trí i
                for (let j = i + 1; j < email.length; j++) {
                    //    kiểm tra dấu . sau @
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
//     Sau khi while check = true thì phía sau nó check = true nên phải khai báo lại check
//kiểm tra CMND nhập vào có đúng không
    check = false;
    while (!check) {
        let card = document.forms["formInfo"]["card"];
        card = card.value;
        //kiểm tra nó là số hay chuỗi
        if (!isNaN(card)) {
            card = Number.parseFloat(card);
        }
        //kiểm tra nó phải số nguyên hay không
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

    check = false;
//kiểm tra ngày tháng năm sinh nhập vào có đúng không
    while (!check) {
        let date = document.forms["formInfo"]["date"];
        date = date.value;
        if (date.charAt(2) === "/" && date.charAt(5) === "/") {
            //let dateDay = date.substring(0,2) có nghĩa là lấy phần tử  vị trí 0 đến phần tử vị trí 2
            // nghĩa là lấy 2 phần tử 0,1
            let dateDay = date.substring(0, 2);
            let dateMonth = date.substring(3, 5);
            let dateYear = date.substring(6, 15); // (6;10) là đủ (6-15) để kiểm tra người dùng nhập dư số
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

    check = false;

//kiểm tra số ngày thuê là số nguyên dương
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

    check = false;

//kiểm tra số lượng người đi kèm
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

    // yêu cầu 2

// Xóa khoảng trắng thừa trong tên khách hàng


    let tempName = " ";
    let name = document.forms["formInfo"]["name"];
    name = name.value;

    //dùng hàm trim() để xóa khoảng trắng giửa 2 đầu 2 bên
    //Muốn chuẩn hóa dữ liệu đưa về chữ thường hết để dễ chuẩn hóa hơn .toLowerCase();

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
    alert(tempName)
    // name.value = tempName;


//Xóa khoảng trắng thừa và chuẩn hóa dử liệu trong địa chỉ

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
    address.value = tempAddress;

}
