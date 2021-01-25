package Bai6_Inheritance.Baitap.PointAndMoveablePoint;

public class PointMainMove {
    public static void main(String[] args) {
        Point point = new Point(2,4);
        System.out.println(point);
        MoveablePoint point1 = new MoveablePoint(2,4,6,8);
        System.out.println(point1);
        System.out.println(point1.move(5,6));
    }
}
