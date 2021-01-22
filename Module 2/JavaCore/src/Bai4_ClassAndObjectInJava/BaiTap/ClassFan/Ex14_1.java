package Bai4_ClassAndObjectInJava.BaiTap.ClassFan;

public class Ex14_1 {
    public static void main(String[] args) {
        Fan fan1 = new Fan();
        Fan fan2 = new Fan();
        fan1.setSpeed(3);
        fan1.setRadius(10);
        fan1.setColor("Yellow");
        fan1.setOn(true);

        fan2.setSpeed(2);
        fan2.setRadius(5);
        fan2.setColor("Yellow");
        fan2.setOn(false);
        System.out.println(fan1);
        System.out.println(fan2);
    }
}


