class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }

    getArea(radius){
        return Math.PI * this.radius * this.radius;
    }
}
let sCircle = new Circle(2,"red");
let radius = sCircle.getRadius();
let color = sCircle.getColor();
alert("Bán kính: " + radius + ' Màu: ' + color);
let S = sCircle.getArea();
alert("Diện tích: " + S);

