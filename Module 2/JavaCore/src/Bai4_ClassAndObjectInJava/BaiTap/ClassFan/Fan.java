package Bai4_ClassAndObjectInJava.BaiTap.ClassFan;

public class Fan {
    final private int Slow = 1;
    final private int Medium = 2;
    final private int Fast = 3;

    private int speed;
    public boolean on;
    private double radius = 5;
    private String color = "blue";

    public int getSlow() {
        return Slow;
    }

    public int getMedium() {
        return Medium;
    }

    public int getFast() {
        return Fast;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
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
    public void fan(){
        this.color = color;
    }

}
