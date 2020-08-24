let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');


function onchangeImage(number) {
    switch (number) {
        case 1: {
            if (img1.getAttribute('src') === "./img/cat1.jpg") {
                img1.src = "./img/key1.jpg";
            } else if (img1.getAttribute('src') === "./img/key1.jpg") {
                img1.src = "./img/panda1.jpg";
            } else if (img1.getAttribute('src') === "./img/panda1.jpg") {
                img1.src = "./img/cat1.jpg";
            }
            break;
        }
        case 2: {
            if (img2.getAttribute('src') === "./img/cat2.jpg") {
                img2.src = "./img/key2.jpg";
            } else if (img2.getAttribute('src') === "./img/key2.jpg") {
                img2.src = "./img/panda2.jpg";
            } else if (img2.getAttribute('src') === "./img/panda2.jpg") {
                img2.src = "./img/cat2.jpg";
            }
            break;
        }
        case 3: {
            if (img3.getAttribute('src') === "./img/cat3.jpg") {
                img3.src = "./img/key3.jpg";
            } else if (img3.getAttribute('src') === "./img/key3.jpg") {
                img3.src = "./img/panda3.jpg";
            } else if (img3.getAttribute('src') === "./img/panda3.jpg") {
                img3.src = "./img/cat3.jpg";
            }
            break;
        }
        case 4: {
            if (img4.getAttribute('src') === "./img/cat4.jpg") {
                img4.src = "./img/key4.jpg";
            } else if (img4.getAttribute('src') === "./img/key4.jpg") {
                img4.src = "./img/panda4.jpg";
            } else if (img4.getAttribute('src') === "./img/panda4.jpg") {
                img4.src = "./img/cat4.jpg";
            }
            break;
        }
        case 5: {
            if (img5.getAttribute('src') === "./img/cat5.jpg") {
                img5.src = "./img/key5.jpg";
            } else if (img5.getAttribute('src') === "./img/key5.jpg") {
                img5.src = "./img/panda5.jpg";
            } else if (img5.getAttribute('src') === "./img/panda5.jpg") {
                img5.src = "./img/cat5.jpg";
            }
            break;
        }
    }
    checkImage();
}
function checkImage() {
    if(img1.getAttribute('src') ==="./img/cat1.jpg"
        && img2.getAttribute('src') ==="./img/cat2.jpg"
        && img3.getAttribute('src') ==="./img/cat3.jpg"
        && img4.getAttribute('src') ==="./img/cat4.jpg"
        && img5.getAttribute('src') ==="./img/cat5.jpg") {
        alert("hello")
        return;
    }
    if(img1.getAttribute('src') ==="./img/key1.jpg"
        && img2.getAttribute('src') ==="./img/key2.jpg"
        && img3.getAttribute('src') ==="./img/key3.jpg"
        && img4.getAttribute('src') ==="./img/key4.jpg"
        && img5.getAttribute('src') ==="./img/key5.jpg") {
        alert("hello")
        return;
    }
    if(img1.getAttribute('src') ==="./img/panda1.jpg"
        && img2.getAttribute('src') ==="./img/panda2.jpg"
        && img3.getAttribute('src') ==="./img/panda3.jpg"
        && img4.getAttribute('src') ==="./img/panda4.jpg"
        && img5.getAttribute('src') ==="./img/panda5.jpg") {
        alert("hello")
        return;
    }
}




