package Bai2_LoopInJava.BaiTap;

import java.sql.SQLOutput;
import java.util.Scanner;

public class HienThiHinh {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap chieu dai: ");
        int a = sc.nextInt();
        System.out.println("Nhap chieu rong: ");
        int b = sc.nextInt();
        for (int i = 0; i < b; i++){
            System.out.println(" ");
            for (int j = 0; j < a; j++){
                System.out.print("*");
            }
        }
                // Tam giac
        for (int i = 1; i <= a; i++){
                System.out.println("");
            for (int j = 0; j < i; j++){
                System.out.print("*");
            }
        }
                // Tam giac nguoc
        System.out.println(" ");
        System.out.println("Tam giac nguoc");
        for (int i = a; i >= 1; i--){
            System.out.println("");
            for (int j = 0; j < i; j++){
                System.out.print("*");
            }
        }
    }
}
