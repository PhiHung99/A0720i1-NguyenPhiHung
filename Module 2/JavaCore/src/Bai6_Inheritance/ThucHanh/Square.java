package Bai6_Inheritance.ThucHanh;

public class Square extends Rectangle{
    public Square() {
    }

    public Square(double size) {
        super(size, size);
    }

    public Square(String color, boolean filled,double size) {
        super(color, filled, size, size);
    }

    public double getSide() {
        return getWidth();
    }

    @Override
    public void setWidth(double side) {
        super.setWidth(side);
//        super.setHeight(side);
    }

    @Override
    public double getWidth() {
        return super.getWidth();
    }

    @Override
    public String toString() {
        return " A Square with side = " + getSide() + " which is a subclass of " + super.toString();
    }
}
