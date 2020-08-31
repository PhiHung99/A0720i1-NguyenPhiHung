
class MoHinhHCN{
    constructor(witdhs, longs) {
        this.witdhs = witdhs;
        this.longs = longs;
    }
    dt(){
        return this.witdhs * this.longs;
    }
    cv(){
        return (this.longs + this.witdhs)*2;
    }
}
let witdhs = parseInt(prompt("Nhập vào chiều rộng"));
let longs = parseInt(prompt("Nhập vào chiều dài"));
function CreateHCN() {
    let canVas = document.getElementById("myCanvas");
    let ctx = canVas.getContext("2d");
    let HCN = new MoHinhHCN(witdhs, longs);
    ctx.fillStyle = "#aaff82";
    ctx.fillRect(100, 100, HCN.witdhs, HCN.longs);
    document.getElementById("result2").innerHTML = "Chiều Dài: " + HCN.longs + "\n" + "Chiều Rộng: " + HCN.witdhs;
    document.getElementById("result1").innerHTML = "Diện tích: " + HCN.dt();
    document.getElementById("result").innerHTML = "Chu vi: " + HCN.cv();
}
CreateHCN();
