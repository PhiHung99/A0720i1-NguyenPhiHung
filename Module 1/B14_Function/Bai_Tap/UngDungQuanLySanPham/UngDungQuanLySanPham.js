let arrProduct = ["Iphone", "SamSung", "Oppo"];
function displayProduct() {
    document.body.innerHTML = '';
    let temp = "<h2>Add new Product</h2><br>" +
        "<input type ='text' id = 'newProduct'>" +
        "<button onclick ='addNewProduct()'>Add new Product</button>  ";
    temp += "<table>"
    for (let i = 0; i < arrProduct.length; i++) {
        temp += "<tr><td>" + arrProduct[i] + "</td>" +
            "<td><button onclick='displayFormEditProduct("+i+")'>Edit</button></td>"+
            "<td><button onclick='deleteProduct("+i+")'>Edit</button></td>"+
            "</tr>";
    }
    temp += "</table>";
    document.write(temp)
}
function addNewProduct() {
    let newProduct = document.getElementById('newProduct').value;
    arrProduct.push(newProduct);
    displayProduct();
}
function displayFormEditProduct(index) {
    let temp = "<h2>Edit Product</h2><br>" +
        "<input type ='text' value ='"+arrProduct[index]+"' id = 'product'>" +
        "<button onclick='editProduct("+index+")'>EditProduct</button>";
    displayProduct();
    document.write(temp)
}
function editProduct(index) {
    let newProduct = document.getElementById("product").value
    arrProduct[index]= newProduct;
    displayProduct();
}
function deleteProduct(index) {
    if(confirm("Bạn có muốn xóa sản phẩm "+arrProduct[index]+" này không?")) {
        arrProduct.splice(index,1);
    }
    displayProduct();
}
displayProduct();
