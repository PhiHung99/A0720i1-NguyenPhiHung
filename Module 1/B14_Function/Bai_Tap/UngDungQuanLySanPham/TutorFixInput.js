let arrProduct = ["Iphone", "SamSung", "Oppo"];
function displayProduct() {
    document.body.innerHTML = '';
    let temp = "<h2>Add new Product</h2><br>" +
        "<input type ='text' id = 'newProduct'>" +
        "<input type ='button' value = 'Add new Product' onclick ='addNewProduct()'>";
    temp += "<table>"
    for (let i = 0; i < arrProduct.length; i++) {
        temp += "<tr><td>" + arrProduct[i] + "</td>" +
            "<td><input type = 'button' value = 'Edit' onclick ='displayFormEditProduct(" + i + ")'></td>" +
            "<td><input type = 'button' value = 'Delete' onclick ='deleteProduct(" + i + ")'></td>" +
            "</tr>"
    }
    temp += "</table>"
    document.write(temp)
}
function addNewProduct() {
    let newProduct = document.getElementById('newProduct').value;
    arrProduct.push(newProduct);
    displayProduct();
}
function displayFormEditProduct(index) {
    document.body.innerHTML = '';
    let temp = "<h2>Add new Product</h2><br>" +
        "<input type ='text' id = 'newProduct'>" +
        "<input type ='button' value = 'Add new Product' onclick ='addNewProduct()'>";
    temp += "<table>"
    for (let i = 0; i < arrProduct.length; i++) {
        if (index == i) {
            temp += "<tr><td><input type ='text' value ='" + arrProduct[i] + "' id ='product'></td>" +
                "<td><input type = 'button' value = 'Submit' onclick ='editProduct(" + i + ")'></td>" +
                "<td><input type = 'button' value = 'Delete' onclick ='deleteProduct(" + i + ")'></td>" +
                "</tr>"
        } else {
            temp += "<tr><td>" + arrProduct[i] + "</td>" +
                "<td><input type = 'button' value = 'Edit' onclick ='displayFormEditProduct(" + i + ")'></td>" +
                "<td><input type = 'button' value = 'Delete' onclick ='deleteProduct(" + i + ")'></td>" +
                "</tr>"
        }
    }
    temp += "</table>"
    document.write(temp)
}
function editProduct(index) {
    let newProduct = document.getElementById("product").value
    arrProduct[index] = newProduct;
    displayProduct();
}
function deleteProduct(index) {
    if (confirm("Bạn có muốn xóa sản phẩm " + arrProduct[index] + " này không?")) {
        arrProduct.splice(index, 1);
    }
    displayProduct();
}
displayProduct();