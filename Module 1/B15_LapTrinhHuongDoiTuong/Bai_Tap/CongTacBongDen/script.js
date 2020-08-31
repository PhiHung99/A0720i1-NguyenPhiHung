class Lamp {
    constructor(status) {
        this.status = status;
    }
    showLamp(img){
        if(this.status){
            img.src = "pic_bulboff.gif";
        } else img.src = "pic_bulbon.gif";
    }
}
class SwitchButton {
    switchLamp(lamp){
        lamp.status = !lamp.status;
    }
}
let lamp = new Lamp(true);
let lampSwitch = new SwitchButton();
let lamImg = document.getElementById("lamp");
function TurnOnOff() {
    lampSwitch.switchLamp(lamp);
    lamp.showLamp(lamImg);
}