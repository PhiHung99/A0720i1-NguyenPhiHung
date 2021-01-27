package Bai6_Inheritance.BaiTap.PointAndMoveablePoint;

import java.util.Arrays;

public class MoveablePoint extends Point{
    private float xSpeed;
    private float ySpeed;

    public MoveablePoint(float x, float y, float xSpeed, float ySpeed) {
        super(x, y);
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    public MoveablePoint(float xSpeed, float ySpeed) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    public MoveablePoint(){
    }

    public float getxSpeed() {
        return xSpeed;
    }

    public void setxSpeed(float xSpeed) {
        this.xSpeed = xSpeed;
    }

    public float getySpeed() {
        return ySpeed;
    }

    public void setySpeed(float ySpeed) {
        this.ySpeed = ySpeed;
    }

    public void setSpeed(float xSpeed, float ySpeed){
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    public float[] getSpeed(){
        float[] arrayXYSpeed = {getxSpeed(), getySpeed()};
        return arrayXYSpeed;
    }

    @Override
    public String toString() {
        return "("+getX()+","+getY()+")"+"speed"+ " = " + "(" + getxSpeed()+ ", " + getySpeed()+ ")";
//            return Arrays.toString(getSpeed());
    }

    public MoveablePoint move(float xSpeed, float ySpeed){
       this.setX(getX() + xSpeed);
       this.setY(getY() + ySpeed);
       return this;
    }

    // This trả về một chính nó...

}
