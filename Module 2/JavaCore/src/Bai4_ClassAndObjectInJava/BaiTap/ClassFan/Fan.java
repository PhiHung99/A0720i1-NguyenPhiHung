package Bai4_ClassAndObjectInJava.BaiTap.ClassFan;

public class Fan {
    final private int Slow = 1;
    final private int Medium = 2;
    final private int Fast = 3;
    private int speed;
    public boolean on;
    private double radius;
    private String color;

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        if (speed == Slow){
            this.speed = Slow;
        } else if(speed == Medium){
            this.speed = Medium;
        } else if (speed == Fast){
            this.speed = Fast;
        }
    }

    public boolean isOn() {
        return on;
    }

    public void setOn(boolean on) {
        this.on = on;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

//    public Fan(){
//        this.setSpeed(Slow);
//        this.setOn(false);
//        this.setRadius(5);
//        this.setColor("blue");
//    }

    // van dung duoc //

    public Fan(){
    }

    public String toString() {
        if (on){
            return speed + " - " + color + " - " + radius + " - fan is on";
        } else {
            return color + " - " + radius + " - fan is off";
        }
    }

}
