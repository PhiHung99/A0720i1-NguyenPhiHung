// // Kích thước cố định
class Cricle{
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}
function createCricle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let circle = new Cricle(500,500,80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}
createCricle();



//demo khai báo kiểu cũ

// // Kích thước cố định
//
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
// function createCircle(){
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var circle= new Circle(500, 500, 80);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fill();
// }
// createCircle();


//
// //Bán kính random
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
// function createCircle(){
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var circle= new Circle(500, 500, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fill();
// }
// createCircle();

//
// //Màu ngẫu nhiên
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
//
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
//
// function getRandomColor(){
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return "rgb(" + red + "," + blue + "," + green +")";
// }
//
// function createCircle(){
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var circle= new Circle(500, 500, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// }
//
// createCircle();
//
//
// //Vẽ được hình tròn với vị trí ngẫu nhiên
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
//
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
//
// function getRandomColor(){
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return "rgb(" + red + "," + blue + "," + green +")";
// }
//
// function createCircle(){
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var circle= new Circle(x, y, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// }
//
// createCircle();
//
//
// // Vẽ được 2 hình tròn.
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
//
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
//
// function getRandomColor(){
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return "rgb(" + red + "," + blue + "," + green +")";
// }
//
// function createCircle(){
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var circle= new Circle(x, y, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// }
//
// createCircle();
// createCircle();
//
//
// // Tạo rất nhiều hình tròn.
// function Circle(x, y, radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
//
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
//
// function getRandomColor(){
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return "rgb(" + red + "," + blue + "," + green +")";
// }
//
// function createCircle(){
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var circle= new Circle(x, y, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// }
//
// function createMultipleCircle(){
//     for(var i = 0; i < 30; i++){
//         createCircle();
//     }
// }
//
// createMultipleCircle();
//

