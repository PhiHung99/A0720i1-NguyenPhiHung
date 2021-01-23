package Bai4_ClassAndObjectInJava.BaiTap.QuadraticEquation;

public class QuadraticEquation {
    double a;
    double b;
    double c;

    public QuadraticEquation(){
    }

    public QuadraticEquation(double a,double b,double c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    public double getDiscriminant(){
        return this.b*this.b - 4*this.c;
    }
    public double getRoot1(){
        return (-this.b - Math.sqrt((this.b*this.b) - 4*a*c))/(2*this.a);
    }
    public double getRoot2(){
        return (-this.b + Math.sqrt((this.b*this.b) - 4*a*c))/(2*this.a);
    }
    public double getRoot3(){
        return -this.b/(2*this.a);
    }
    public String getRoot4(){
        return "The equation has no roots";
    }
}
