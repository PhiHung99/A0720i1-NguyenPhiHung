
class Hero{
    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed =speed;

        this.getHeroElement = function(){
            return '<img width="'+ this.size + '"' +
                ' height="'+ this.size + '"' +
                ' src="' + this.image +'"' +
                ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
        }

        this.moveRight = function(){
            this.left += speed;
            console.log('ok: ' + this.left);
        }
        this.moveDown = function () {
            this.top += speed;
            console.log("ok:" + this.top);
        }
    }

}
let speed = parseFloat(prompt("Nhập vào tốc độ "))
let hero = new Hero('imgYasuo.jpg', 20, 30, 200, speed);
function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();