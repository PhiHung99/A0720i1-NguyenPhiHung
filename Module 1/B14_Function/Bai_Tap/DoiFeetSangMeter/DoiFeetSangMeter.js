function tempFeet(feet) {
    feet = parseFloat(feet);
    if (isNaN(feet)){
        document.getElementById("result").innerHTML = 'Ơ !! Bạn chưa nhập gì cả, nhập đi nè'
    } else document.getElementById("result").innerHTML = feet  * 0.305;
}


function tempFeet1(num){
    num = parseFloat(num);
    let seletFeet = document.getElementById("temp");
    if (isNaN(num)){
        document.getElementById("result1").innerHTML = 'Ơ !! Bạn chưa nhập gì cả, nhập đi nè'
    } else {
        if (seletFeet.value === "feettt") {
            document.getElementById("result1").innerHTML = "Đổi sang Meter: " + num * 0.305;
        } else if (seletFeet.value === "meterrr") {
            document.getElementById("result1").innerHTML = "Đổi sang Feet: " + 3.279 * num;
        }
    }
}



