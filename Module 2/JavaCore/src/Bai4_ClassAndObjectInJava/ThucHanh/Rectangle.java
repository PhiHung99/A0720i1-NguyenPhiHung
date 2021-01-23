package Bai4_ClassAndObjectInJava.ThucHanh;

public class Rectangle {
    double wight, height;

    public Rectangle() {
    }

    public Rectangle(double wight, double height){
        this.wight = wight;
        this.height = height;
    }
    public double getArea(){
        return this.wight * this.height;
    }

    public double getPerimeter(){
        return (this.wight + this.height)*2;
    }
    public String display(){
        return "Rectangle { " + "width = " + wight + ", height = " + height + " }";
    }
}
