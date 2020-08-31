class Mobile {
    constructor(pin, statusMobile, name) {
        this.pin = pin;
        this.statusMobile = statusMobile;
        this.smsSoanThao = [];
        this.smsThuDen = [];
        this.smsDaGui = [];
        this.name = name;
    }
    // Kiểm tra trạng thái của điện thoại là bật hay tắt.
    isStatus() {
        if (this.statusMobile) {
            return true;
        } else {
            alert("Điện thoại đang tắt. Vui lòng bật điện thoại")
            return false;
        }
    }
    // Chức năng bật hoặc tắt mobile
    onOrOffMoble() {
        if (this.isStatus()) {
            this.statusMobile = false;
        } else {
            chargMobile();
            this.statusMobile = true;
        }
        this.pin--;
    }
    //sạc pin
    chargMobile() {
        if (this.pin < 5) {
            alert("pin yếu. Cần sạc điện thoại");
            while (this.pin <= 100) {
                this.pin += 0.001;
            }
        }
    }
    // Chức năng soạn tin nhắn
    soanSms() {
        //Kiểm tra điện thoại bật hay tắt
        if (this.isStatus()) {
            // Kiểm tra pin có trên 5% hay không?
            this.chargMobile();
            let sms = prompt("Nhập nội dung tin nhắn: ")
            this.smsSoanThao.push(sms);
            this.pin--;
        }
    }
    guiSms(mobile) {
        //Kiểm tra điện thoại bật hay tắt
        if (this.isStatus) {
            // Kiểm tra pin có trên 5% hay không?
            this.chargMobile();
            //Kiểm tra vùng soạn sms có trống hay không? Nếu trống thì cho phép người dùng nhập tin nhắn soạn thảo.
            if (this.smsSoanThao.length === 0) {
                this.soanSms();
                // tin nhắn được gửi đi theo format là người gửi: tên người gửi. Nội dung tin nhắn.
                // tin nhắn sẽ được push vào vùng nhớ hộp thư đến của điện thoại muốn gửi tin nhắn.
                mobile.smsThuDen.push("Người gửi: " + this.name + ". " + this.smsSoanThao[0]);
                // tin nhắn được gửi sẽ được push vào vùng tin nhắn đã gửi của điện thoại gửi tin nhắn.
                this.smsDaGui.push(this.smsSoanThao[0]);
                //Sau đó xóa tin nhắn đã gửi ở vùng tin nhắn soạn thảo
                this.smsSoanThao.splice(0, 1);
            } else {
                //tương tự như trên nhưng trước khi gửi sẽ cho phép người dùng lựa chọn tin nhắn ở vùng nhớ đang soạn thảo để gửi đi
                let temp = "";
                for (let i = 0; i < this.smsSoanThao.length; i++) {
                    temp += i + ": " + this.smsSoanThao[i] + "\n";
                }
                let index = parseInt(prompt(temp + "\n" + "Yêu cầu bạn chọn tin nhắn để gửi!"));
                mobile.smsThuDen.push("Người gửi: " + this.name + ". " + this.smsSoanThao[index]);
                this.smsDaGui.push(this.smsSoanThao[index]);
                this.smsSoanThao.splice(index, 1);
            }
            this.pin--;
        }
    }
    xemSms() {
        //Kiểm tra điện thoại bật hay tắt
        if (this.isStatus()) {
            let temp = [];
            let tempSms = "";
            // Kiểm tra pin có trên 5% hay không?
            this.chargMobile();
            // hiển thị ra danh sách số mobile đã gửi tin nhắn đến điện thoại này?
            // Cho vòng lặp đầu tiên để duyệt tất cả các phần tử có trong vùng nhớ hộp thư đến
            for (let i = 0; i < this.smsThuDen.length; i++) {
                let check=false;
                // VÒng lặp thứ 2 sẽ duyệt chuỗi tin nhắn trong hộp thư đến
                for (let j = 0; j < this.smsThuDen[i].length; j++) {
                    // Nếu nó gặp được kí tự : thì sẽ chạy các câu lệnh ở trong if
                    if (this.smsThuDen[i].charAt(j) === ":") {
                        let tempNguoiGui = "";
                        // Cho vòng lặp thứ 3 từ phần tử sau kí tự : để lấy ra được cái tên điện thoại gửi sms đến.
                        for (let k = j + 1; k < this.smsThuDen[i].length; k++) {
                            // Nếu nó gặp được kí tự . thì sẽ chạy các câu lệnh ở trong if
                            if (this.smsThuDen[i].charAt(k) === ".") {
                                //push tên người gửi vào mảng temp
                                temp.push(tempNguoiGui);
                                check=true;
                                break;
                            } else {
                                // nếu ko thỏa if thì ta sẽ cộng thêm vào chuỗi temNguoiGui
                                tempNguoiGui += this.smsThuDen[i].charAt(k);
                            }
                        }
                        // Kiểm tra biến check có biến true. Nếu như là true thì break vòng lặp 2 để kiểm tra tin nhắn tiếp theo trong vùng nhớ hộp thư đến
                        if(check) {
                            break;
                        }
                    }
                }
            }
            // Hiển thị danh sách các tin nhắn được gửi tới từ điện thoại nào?
            for (let i = 0; i < temp.length; i++) {
                tempSms += i + ": " + temp[i] + "\n";
            }
            //Cho phép người dùng chọn tin nhắn muốn xem trong vùng nhớ hộp thư đến
            let index = parseInt(prompt(tempSms+"\nChọn tin nhắn mà bạn muốn xem: "));
            alert(this.smsThuDen[index]);
            this.pin--;
        }
    }
}
let nokia=new Mobile(100,true,"nokia");
let iphone=new Mobile(10,true,"iphone");
nokia.guiSms(iphone);
iphone.xemSms();