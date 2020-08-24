function result() {
    let numa = document.getElementById("numa");
    numa = parseFloat(numa.value);
    let numb = document.getElementById("numb");
    numb = parseFloat(numb.value);
    let S;
    if ( numa != 0){
        S = "Phương trình có 1 nghiệm duy nhất x = " + (-numb/numa);
    } else
        if(numb == 0){
            S = "Phương trình vô số nghiệm";
        } else S = "Phương trình vô nghiệm";
    document.getElementById("result").innerHTML = S;
}