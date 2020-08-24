function result() {
    let numa = document.getElementById("numa");
    numa = parseFloat(numa.value);
    let numb = document.getElementById("numb");
    numb = parseFloat(numb.value);
    let numc = document.getElementById("numc");
    numc = parseFloat(numc.value);
    let denta;
    denta = (numb*numb) - ( 4* numa * numc);
    let S, P;
    if(numa == 0){
        if ( numb != 0){
            S = "Phương trình có 1 nghiệm duy nhất x = " + (-numc/numb);
        } else if(numc == 0){
                S = "Phương trình vô số nghiệm";
            } else S = "Phương trình vô nghiệm";
        document.getElementById("result").innerHTML = S;
    } else if(denta > 0) {
        S = (-numb - Math.sqrt(denta)) / 2 * numa;
        P = (-numb + Math.sqrt(denta)) / 2 * numa;
        document.getElementById("result").innerHTML = "X1 = " + S + "<br>" + "X2 = " + P;
        } else if(denta < 0) {
            S = "Phương trình có nghiệm kép X = " +(-numb/(2*numa));
        document.getElementById("result").innerHTML = S;
        } else {
        S = "Phương trình vô nghiệm";
        document.getElementById("result").innerHTML = S;
        }
}