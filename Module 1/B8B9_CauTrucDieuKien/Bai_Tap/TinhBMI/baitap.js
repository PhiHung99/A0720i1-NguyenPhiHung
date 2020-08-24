
function result() {
    let weight = document.getElementById("weight");
    weight = parseInt(weight.value);
    // alert(weight);
    let height = document.getElementById("height");
    height = parseFloat(height.value);
    // alert(height);
    //Phải kiểm tra nhỏ hơn 0;

    let bmi;
    bmi = weight / (height*height);
    let ketqua;
    // alert(bmi);
    if (bmi < 18.5) {
       ketqua = "Underweight";
    } else if (bmi < 25.0) {
        ketqua = "Nomal";
    } else if (bmi < 30.0) {
        ketqua = "Overweight";
    } else {
        ketqua = "Obese";
    }
    document.getElementById("demo").innerHTML = ketqua;
}