package Bai6_Inheritance.Baitap.CircleAndCylinder;

public class Cylinder extends Circle{
    private double height;

    public Cylinder(double radius, String color, double height) {
        super(radius, color);
        this.height = height;
    }

    public double Cylindrical(){
        return height*Math.PI*Math.pow(getRadius(), 2);
    }

    @Override
    public String toString() {
        return "Cylinder{" +
                "height=" + height +
                ", Area= " + getArea() + '\'' +
                ", Cylindrical =" + Cylindrical() +
                '}';
    }
}
