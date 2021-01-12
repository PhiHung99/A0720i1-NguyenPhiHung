package Bai3_ArraysAndMethosInJava.BaiTap;

import java.util.Scanner;

public class MinArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter Size Array: ");
        int sizeArr = input.nextInt();
        int[] arr = new int[sizeArr];
        for (int i = 0; i < sizeArr; i++){
            System.out.print("Arr [ " + i + " ]: ");
            arr[i] = input.nextInt();
        }
        checkMin(arr);

    }


    static void checkMin(int[] arr){
        int min = arr[0];
        for (int i = 0; i < arr.length; i++){
            if (arr[i] < min){
                min = arr[i];
            }
        }
        System.out.println("Min Array: " + min);
    }
}
