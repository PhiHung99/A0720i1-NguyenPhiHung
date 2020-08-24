function checkDoiXung() {
    function check(start, end, string) {
        if (start >=  end){
            return true;
        }
        if (string[start]  !== string[end]){
            return false;
        }
        return check(start + 1,end - 1,string)
    }
    let string = document.getElementById("inder");
    string = string.value;
    alert(check(0,string.length - 1,string));
}