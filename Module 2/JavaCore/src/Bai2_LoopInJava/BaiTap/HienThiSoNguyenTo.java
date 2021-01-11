package Bai2_LoopInJava.BaiTap;

import java.util.Scanner;

public class HienThiSoNguyenTo {

//    static boolean isPrimeNumber(int n){
//        int count = 0;
//        for (int i = 1; i <= n; i++){
//            if (n % i == 0) {
//                count++;
//            }
//        }
//
//        if (count == 2){
//            return true;
//        } else {
//            return false;
//        }
//    }

    // **************************** //

    static boolean isPrimeNumber(int n) {
        if (n < 2) {
            return false;
        }
        int squareRoot = (int) Math.sqrt(n);
        for (int i = 2; i <= squareRoot; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhập n = ");
        int n = scanner.nextInt();
        System.out.printf("%d số nguyên tố đầu tiên là: \n", n);
        int dem = 0;
        int number = 2;
        while (dem < n) {
            if (isPrimeNumber(number)) {
                System.out.print(number + " ");
                dem++;
            }
            number++;
        }
    }
}
