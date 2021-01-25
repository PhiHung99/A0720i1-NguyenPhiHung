package Bai6_Inheritance.Baitap.Point2Dand3D;

public class Point3D extends Point2D {
    private float z;

    public Point3D(float x, float y, float z) {
        super(x, y);
        this.z = z;
    }

    public Point3D(float z) {
        this.z = z;
    }

    public float getZ() {
        return z;
    }

    public void setZ(float z) {
        this.z = z;
    }

    public void setXYZ(float x, float y, float z){
        this.z = z;
        this.setX(x);
        this.setY(y);
    }

    public float[] getXYZ(){
        float[] arrayXYZ = {getX(), getY(), getZ()};
        return arrayXYZ;
    }

//    @Override
//    public String toString() {
//        return "Point3D{" +
//                "z=" + z +
//                '}';
//    }
    // ????


    @Override
    public String toString() {
        return "Point3D: (" + getX() + ", " + getY() + ", " + getZ() +
                ")";
    }
}
