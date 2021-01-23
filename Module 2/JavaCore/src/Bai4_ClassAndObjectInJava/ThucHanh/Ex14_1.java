package Bai4_ClassAndObjectInJava.ThucHanh;

import java.util.Scanner;

public class Ex14_1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter width: ");
        double width = input.nextDouble();
        System.out.println("Enter height: ");
        double height = input.nextDouble();

        Rectangle rectangle = new Rectangle(width, height);

        System.out.println("Your Rectangle: " +  rectangle.display());
        System.out.println("Are: " +  rectangle.getArea());
        System.out.println("Perimeter: " + rectangle.getPerimeter());
    }

}
