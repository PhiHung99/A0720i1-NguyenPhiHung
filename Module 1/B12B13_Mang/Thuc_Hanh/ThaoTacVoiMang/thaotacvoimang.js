let x = 0;
let array = Array();
function addArray() {
    array[x] = document.getElementById("import").value;
    // document.writeln("Element: " + array[x] + " Added at index  " + x);
    x++;
    document.getElementById("import").value = "";
}
function displayArray() {
    let e = "<hr/>";
    for (let i   = 0; i < array.length; i++) {
        e += "Element:" + i + " = " + array[i] + "<br>";
    } document.getElementById("result").innerHTML = e;
}