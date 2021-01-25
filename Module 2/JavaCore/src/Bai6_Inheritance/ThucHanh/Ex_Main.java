package Bai6_Inheritance.ThucHanh;

public class Ex_Main {
    public static void main(String[] args) {

        Circle shape = new Circle();
        System.out.println(shape);
        Shape shape1 = new Circle(5);
        System.out.println(shape1);

        shape.setFilled(true);
        shape.getArea();
        shape.setRadius(10);
        shape.getArea();
        shape.getPerimeter();
        System.out.println(shape);

        shape.setFilled(false);
        shape.setColor("red");
        shape.setRadius(20);
        shape.getArea();
        shape.getPerimeter();
        System.out.println(shape);

        Rectangle rectangle1 = new Rectangle();
        System.out.println(rectangle1);

        Square square1 = new Square();
        System.out.println(square1);


    }
}
