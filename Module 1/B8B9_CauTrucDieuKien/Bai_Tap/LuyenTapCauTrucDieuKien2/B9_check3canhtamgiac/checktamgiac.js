function result() {
    let numa = document.getElementById("numa");
    let numb = document.getElementById("numb");
    let numc = document.getElementById("numc");
    numa = parseFloat(numa.value);
    numb = parseFloat(numb.value);
    numc = parseFloat(numc.value);
    let S;
    if (numa > 0 && numb > 0 && numc > 0){
        if((numa + numb) > numc ){
            if((numb + numc) > numa){
                if ((numa + numc ) > numb){
                    S = "Đây là 3 cạnh của 1 tam giác";
                } else S = "Đây không phải là cạnh của 1 tam giác";
            } else S = "Đây không phải là cạnh của 1 tam giác";
        } else S = "Đây không phải là cạnh của 1 tam giác";
    } else S = "Đây không phải là cạnh của 1 tam giác";
    document.getElementById("result").innerHTML = S;
}