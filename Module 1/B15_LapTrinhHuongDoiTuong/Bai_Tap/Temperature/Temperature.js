    class Temperature{
    constructor(tempC) {
                this.tempC = tempC;
            }
            convertF(){
        return (this.tempC*1.80000 + 32.00);
            }
            convertK(){
        return (this.tempC + 273.150);
            }
    }
    let C = parseFloat(prompt("Nhập vào độ C"));
    if (isNaN(C) || C < -273){
        alert("Kiểm tra bạn nhập đúng chưa")
    } else {
        let temp = new Temperature(C);
        alert("Độ F: " + temp.convertF());
        alert("Độ K: " + temp.convertK());
    }