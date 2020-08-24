let arrNameCustomer = [];
while (true) {
    let choose = parseInt(prompt("1.Add Customers" + "\n" + "2.Delete Customer"));
    switch (choose) {
        case 1: {
            let number = parseInt(prompt("Enter number customer you want add to arr: "));
            for (let i = 0; i < number; i++) {
                let nameCustomer = prompt("Enter name customer: ");
                arrNameCustomer.push(nameCustomer);
            }
            let result = "";
            arrNameCustomer.sort();
            for (let i = 0; i < arrNameCustomer.length; i++) {
                result += "No " + (i + 1) + ": " + arrNameCustomer[i] + "\n";
            }
            alert(result);
        }
            break;
        case 2: {
            let check = false;
            let nameCustomer = prompt("Enter customer you want delete: ");
            for (let i = 0; i < arrNameCustomer.length; i++){
                if(arrNameCustomer[i]===nameCustomer){
                    arrNameCustomer.splice(i,1);
                    check = true;
                }
            }
            if (!check){
                alert("The name you want to delete is not in the array");
            }
            let result = "";
            arrNameCustomer.sort();
            for (let i = 0; i < arrNameCustomer.length; i++) {
                result += "No " + (i + 1) + ": " + arrNameCustomer[i] + "\n";
            }
            alert(result);
        }
        default: {
            alert("Failed");
        }
    }
}