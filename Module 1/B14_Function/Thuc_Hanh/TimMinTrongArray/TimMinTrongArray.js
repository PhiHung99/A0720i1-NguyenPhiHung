function checkMin(arr) {
    if (arr.length === 0){
        return "Ohh No!! Mảng này rổng rồi bạn ei";
    }
    let arrMin = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arrMin > arr[i]){
            arrMin = arr[i];
        }
    }
    return arrMin;
}

let arr1 = [2,3,4,56,0,2,3,4];
alert("arr1: Min là " + checkMin(arr1));
let arr2 = [];
alert("arr2: Min là " + checkMin(arr2));





