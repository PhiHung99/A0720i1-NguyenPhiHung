function intPrime(n) {
    {
        if(n <= 1) return false;
        for (let i = 2;i <= Math.sqrt(n); i++){
            if (n % i === 0){
                return false;
            }
        } return true;
    }
}


 function checkInt(checkint) {
    checkint = parseInt(checkint);
    if (isNaN(checkint)){
        document.getElementById("result").innerHTML = "Bạn chưa nhập gì mà?? Nhập số cần kiểm tra đi nào"
    } else {
        if (intPrime(checkint)) {
            document.getElementById("result").innerHTML = "Ohh Yeah!! Chính nó, nó là số nguyên tố";
        } else document.getElementById("result").innerHTML = "Ohh No!! Nó không là số nguyên tố";
    }
 }