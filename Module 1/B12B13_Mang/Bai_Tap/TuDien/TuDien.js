function checkEng() {
    let arrEng = ["operating system", "multi user", "alphanumeric data", "authority work","alphabetical catalog",
    "broad classification","cluster controller","gateway","osi","packet","source code","port","cataloging","subject entry","memory",
    "microprocessor","operation","storage","chief source of information","graphics","hardware","software"];
    let arrVne = ["Hệ điều hành", "Đa người dùng", "Dữ liệu chữ số", "Công tác biên mục (đặt tên)", "Mục lục xếp theo trật tự chữ cái",
    "Phân loại tổng quát","Bộ điều khiển trùm","Cổng kết nối Internet cho những mạng lớn","Là chữ viết tắt của “Open System Interconnection",
    "Gói dữ liệu","Mã nguồn (của của file hay một chương trình nào đó)","Cổng","Công tác biên mục","thẻ chủ đề: công cụ truy cập thông qua chủ đề của ấn phẩm",
    "bộ nhớ","bộ vi xử lý","thao tác","lưu trữ","Nguồn thông tin chính","đồ họa","Phần cứng","phần mềm"];
    let check = document.getElementById("check");
    check = check.value;
    check = check.toLowerCase();
    let result = "";
    for (let i = 0; i < arrEng.length; i++){
        if (arrEng[i] === check){
          result = arrVne[i];
          break;
        } else {
            result = "The information you entered was not found";
        }
    }
    alert(result);
}
