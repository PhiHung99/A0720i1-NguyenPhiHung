package Bai4_ClassAndObjectInJava.BaiTap.QuadraticEquation;

import java.util.Scanner;

public class Ex14_1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a: ");
        double a = input.nextDouble();
        System.out.println("Enter b: ");
        double b = input.nextDouble();
        System.out.println("Enter c: ");
        double c = input.nextDouble();

        QuadraticEquation quadraticEquation = new QuadraticEquation(a,b,c);

        if (quadraticEquation.getDiscriminant() > 0){
            System.out.println(quadraticEquation.getRoot1());
            System.out.println(quadraticEquation.getRoot2());
        } else if (quadraticEquation.getDiscriminant() == 0){
            System.out.println(quadraticEquation.getRoot3());
        } else System.out.println(quadraticEquation.getRoot4());
    }
}
