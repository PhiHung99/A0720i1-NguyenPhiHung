let arrListCustomer = [];
function displayMainMenu() {
    let choose = parseInt(prompt("1.Add new customer."+"\n2.Display Information Customer"+"\n3.Edit Information Customer"+"\n4.Delete Customer"+"\n5.Exit"));
    switch (choose) {
        case 1:{
            addNewCustomer();
            break;
        }case 2:{
            displayCustomer();
            break;
        }case 3:{
            editCustomer();
            break;
        }case 4:{
            deleteCustomer();
            break;
        }case 5:{
            break;
        }
        default: {
            alert("Faild")
        }
    }
}
function addNewCustomer() {
    let dataInput = [];
    let name = prompt("Input Name");
    let card = prompt("Input Card");
    let date = prompt("Input birthday");
    let email = prompt("Input Email");
    let address = prompt("Input Address");
    let customer = prompt("Input Customer");
    let discount = prompt("Input Discord");
    let quantity = prompt("Input Quantity Included");
    let day = prompt("Input renday")
    let service = prompt("Input service");
    let room = prompt("Input room");
    dataInput.push(name);
    dataInput.push(card);
    dataInput.push(date);
    dataInput.push(email);
    dataInput.push(address);
    dataInput.push(customer);
    dataInput.push(discount);
    dataInput.push(quantity);
    dataInput.push(day);
    dataInput.push(service);
    dataInput.push(room);
    arrListCustomer.push(dataInput);
    alert("Bạn đã nhập thành công");
    displayMainMenu();
}
displayMainMenu();

function displayCustomer(){
    let temp = " ";
    for(let i = 0; i <arrListCustomer.length; i++){
        temp += i + ". Name: " + arrListCustomer[i][0] + "\n";
    }
    let chooseDisplay = parseInt(prompt("Bấm phím 0 để xem toàn bộ thông tin vừa nhập: " +  temp));
    alert("1.Name: " + arrListCustomer[chooseDisplay][0]+ "\n" +
        "2.ID card number: " + arrListCustomer[chooseDisplay][1] + "\n" +
        "3.Date of birth: " + arrListCustomer[chooseDisplay][2] + "\n" +
        "4.Email: " + arrListCustomer[chooseDisplay][3] + "\n" +
        "5.Address: " + arrListCustomer[chooseDisplay][4] + "\n" +
        "6.Customer: " + arrListCustomer[chooseDisplay][5] + "\n" +
        "7.Discount: " + arrListCustomer[chooseDisplay][6] + "\n" +
        "8.Quantity comes: " + arrListCustomer[chooseDisplay][7] + "\n" +
        "9.Number of rental days: " + arrListCustomer[chooseDisplay][8] + "\n"+
        "10.Type of service: " + arrListCustomer[chooseDisplay][9] + "\n" +
        "11.Type of room for rent: " + arrListCustomer[chooseDisplay][10] + "\n");
    displayMainMenu();
    // document.writeln("<h2>Thông tin khách hàng</h2><br>" +
    //     "<table>" +
    //     "<tr>" + "<td>Name:</td>" + "<td>" + arrListCustomer[chooseDisplay][0] + "</td>" + "</tr>" +
    //     "<tr>" + "<td>ID card number:</td>" + "<td>" + arrListCustomer[chooseDisplay][1] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Date of birth:</td>" + "<td>" + arrListCustomer[chooseDisplay][2] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Email:</td>" + "<td>" + arrListCustomer[chooseDisplay][3] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Address:</td>" + "<td>" + arrListCustomer[chooseDisplay][4] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Customer:</td>" + "<td>" + arrListCustomer[chooseDisplay][5] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Discount:</td>" + "<td>" + arrListCustomer[chooseDisplay][6] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Quantity comes:</td>" + "<td>" + arrListCustomer[chooseDisplay][7] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Number of rental days:</td>" + "<td>" + arrListCustomer[chooseDisplay][8] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Type of service:</td>" + "<td>" + arrListCustomer[chooseDisplay][9] + "</td>" + "</tr>"+
    //     "<tr>" + "<td>Type of room for rent:</td>" + "<td>" + arrListCustomer[chooseDisplay][10] + "</td>" + "</tr>"+
    //     "</table>");
}
function editCustomer() {
    let temp = " ";
    for(let i = 0; i <arrListCustomer.length; i++){
        temp += i + " Name: " + arrListCustomer[i][0] + "\n";
    }
    let chooseDisplay = parseInt(prompt("Bấm phím 0 để xem toàn bộ thông tin vừa nhập và chọn vị trí muốn edit: " +  temp));
    let chooseEdit = parseInt(prompt("1.Name:" + arrListCustomer[chooseDisplay][0]+ "\n" +
        "2.ID card number: " + arrListCustomer[chooseDisplay][1] + "\n" +
        "3.Date of birth: " + arrListCustomer[chooseDisplay][2] + "\n" +
        "4.Email: " + arrListCustomer[chooseDisplay][3] + "\n" +
        "5.Address: " + arrListCustomer[chooseDisplay][4] + "\n" +
        "6.Customer: " + arrListCustomer[chooseDisplay][5] + "\n" +
        "7.Discount: " + arrListCustomer[chooseDisplay][6] + "\n" +
        "8.Quantity comes: " + arrListCustomer[chooseDisplay][7] + "\n" +
        "9.Number of rental days: " + arrListCustomer[chooseDisplay][8] + "\n"+
        "10.Type of service: " + arrListCustomer[chooseDisplay][9] + "\n" +
        "11.Type of room for rent: " + arrListCustomer[chooseDisplay][10] + "\n" +
        "Chọn vị trí bạn muốn edit "));

    switch (chooseEdit) {
        case 1: {
            arrListCustomer[chooseDisplay][0] = prompt("Enter name: ");
            break;
        }
        case 2: {
            arrListCustomer[chooseDisplay][1] = prompt("Enter ID card number: ");
            break;
        }
        case 3: {
            arrListCustomer[chooseDisplay][2] = prompt("Enter Date of birth: ");
            break;
        }
        case 4: {
            arrListCustomer[chooseDisplay][3] = prompt("Enter Email: ");
            break;
        }
        case 5: {
            arrListCustomer[chooseDisplay][4] = prompt("Enter Address: ");
            break;
        }
        case 6: {
            arrListCustomer[chooseDisplay][5] = prompt("Enter Customer: ");
            break;
        }
        case 7: {
            arrListCustomer[chooseDisplay][6] = prompt("Enter Discount: ");
            break;
        }
        case 8: {
            arrListCustomer[chooseDisplay][7] = prompt("Enter Quantity comes: ");
            break;
        }
        case 9: {
            arrListCustomer[chooseDisplay][8] = prompt("Enter Number of rental days: ");
            break;
        }
        case 10: {
            arrListCustomer[chooseDisplay][9] = prompt("Enter Type of service: ");
            break;
        }
        case 11: {
            arrListCustomer[chooseDisplay][10] = prompt("Enter Type of room for rent: ");
            break;
        }
        default: {
            alert("Failed");
        }
    }
    displayMainMenu();
}
function deleteCustomer() {
    let temp = " ";
    for(let i = 0; i <arrListCustomer.length; i++){
        temp += i + " Name: " + arrListCustomer[i][0] + "\n";
    }
    let chooseDelete = parseInt(prompt(temp + "\n" +
                                        "Chọn Customer muốn xóa"));
    let check = parseInt(prompt("Are you want delete customer:" + "\n1.Yes" + "\n2.No"));
    if (check === 1){
        arrListCustomer.splice(chooseDelete, 1);
        alert("Bạn đã xóa thành công");
    } else {
        alert("Cancel");
    }
    displayMainMenu();
}