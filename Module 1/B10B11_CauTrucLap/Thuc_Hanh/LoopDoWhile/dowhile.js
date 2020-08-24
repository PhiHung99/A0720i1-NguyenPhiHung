let value = null;
do {
    value = prompt("nhập vào các số từ 1 -> 10")
} while (value < 1 || value > 10);
    document.writeln("Các số vừa nhập là:" + value);