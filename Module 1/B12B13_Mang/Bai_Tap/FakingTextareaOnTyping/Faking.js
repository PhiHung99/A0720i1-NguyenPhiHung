    let arr = [];
    let n = "";
    arr[1] = "A";
    arr[2] = "n";
    arr[3] = "h";
    arr[4] = " ";
    arr[5] = "N";
    arr[6] = "h";
    arr[7] = "ớ";
    arr[8] = " ";
    arr[9] = "E";
    arr[10] = "m";
    function textarea() {
            // form: Truy cập đến các form trong tài liệu. Từ đó lại có thể tiếp tục truy cập đến các nút con của form như textbox,
            // checkbox… Chẳng hạn trong tài liệu có form tên là f, textbox tên là txt textbox này nằm trong form f.
            // Khi đó muốn thao tác với textbox txt, chẳng hạn gán giá trị cho textbox txt ta làm như sau: document.f.txt.value = giá_trị,
            // document.f.txt.className = tên_lớp_style dùng để thay đổi tên lớp style của đối tượng.
        let t = document.from.txt.value;
        let j = t.length;
        if(j > 0)
        {
            for(let i=1; i<=j; i++)
            {
                n = n + arr[i];
                if(i === 11)
                {
                    document.from.txt.value = "";
                    n = "";
                }
            }
        }
        document.from.txt.value = n;
        n= "";
        setTimeout("textarea()", 1);
    }




    //Được dùng để diễn tả toàn bộ tài liệu HTML và có thể được dùng để truy cập đến tất cả các thành phần trong trang.
    // Cũng như hai đối tượng history và location, đối tượng document cũng là một phần của đối tượng window và có thể được truy cập thông qua đối tượng window.
    // Thuộc tính:
    // title: Đặt hoặc trả về tiêu đề trang. Cú pháp: document.title = tiêu_đề.
    // aLinkColor: Đặt hoặc trả về màu của tất cả các đường link đang hoạt động trong tài liệu.
    // vlinkColor: Đặt hoặc khôi phục màu của các đường link đã được người dùng ghé thăm.
    // bgColor: Đặt hoặc khôi phục màu nền của tài liệu.
    // Phương thức:
    // write(): In ra màn hình một chuỗi ký tự.
    // writeln(): In ra màn hình một chuỗi ký tự kết thúc là một dấu cách.
    // Ngoài ra đối tượng document còn có thể truy cập đến các thành phform: Truy cập đến các form trong tài liệu. Từ đó lại có thể tiếp tục truy cập đến các nút con của form như textbox,
    //     // checkbox… Chẳng hạn trong tài liệu có form tên là f, textbox tên là txt textbox này nằm trong form f.
    //     // Khi đó muốn thao tác với textbox txt, chẳng hạn gán giá trị cho textbox txt ta làm như sau: document.f.txt.value = giá_trị,
    //     // document.f.txt.className = tên_lớp_style dùng để thay đổi tên lớp style của đối tượng.ần HTML như sau:
    //
    // document.forms.length trả về tổng số form được dùng trong trang.
    // anchors: Truy cập đến các thẻ <a> trong tài liệu.
    // images: Truy cập đến các thẻ <img> trong tài liệu.
    // links: Truy cập đến các đường link trong tài liệu.