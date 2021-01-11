package Bai1_IntroductionToJava.BaiTap;

import java.util.Scanner;

public class HienThiLoiChao {
    public static void main(String[] args) {
        System.out.println("Enter Your Name:");
        Scanner op = new Scanner(System.in);
        String a = op.nextLine();
        System.out.println("Hello" + a);
    }
}
