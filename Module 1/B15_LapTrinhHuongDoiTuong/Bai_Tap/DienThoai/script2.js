class Mobile {
    constructor(pin, sendMessage, messDangSoanThao, inboxMessage, status) {
        this.pin = pin;
        this.sendMessage = sendMessage;
        this.messDangSoanThao = messDangSoanThao;
        this.inboxMessage = inboxMessage;
        this.status = status;
    }
    isStatus() {
        if (this.status) {
            return true;
        } else {
            return false;
        }
    }
    changeStatus() {
        this.status = !this.status;
        this.pin--;
    }
    chargingPin() {
        while (this.pin <= 100) {
            this.pin += 1;
        }
    }
    soanTinNhan(mobile) {
        if (this.isStatus()) {
            let message = prompt("Mời bạn nhập tin nhắn");
            let isSend = confirm("bạn có muốn gửi tin nhắn này đi không?");
            if (isSend) {
                this.sendMessage.push(message);
                mobile.inboxMessage.push(message);
            } else {
                this.messDangSoanThao.push(message);
            }
            this.pin--;
        } else {
            alert("Điện thoại đã tắt")
        }
    }
    xemMessageHopThuDen() {
        if (this.isStatus()) {
            let temp = "";
            for (let i = 0; i < this.inboxMessage.length; i++) {
                temp += i + ": " + this.inboxMessage[i] + "/n";
            }
            let index = prompt(temp);
            alert(this.inboxMessage[index]);
        } else {
            alert("Điện thoại đã tắt")
        }

        this.pin--;
    }

    xemMessageThuDaGui() {
        if (this.isStatus()) {
            let temp = "";
            for (let i = 0; i < this.sendMessage.length; i++) {
                temp += i + ": " + this.sendMessage[i] + "/n";
            }
            let index = prompt(temp);
            alert(this.sendMessage[index]);
        } else {
            alert("Điện thoại đã tắt")
        }
        this.pin--;
    }
}
let nokia =new Mobile(100,[],[],[],true);
let iphone =new Mobile(100,[],[],[],true);
nokia.soanTinNhan(iphone);
nokia.xemMessageThuDaGui();
iphone.xemMessageHopThuDen();