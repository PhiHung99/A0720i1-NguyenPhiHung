package Bai3_ArraysAndMethosInJava.BaiTap;

import java.util.Scanner;

public class XoaPhanTu {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size array: ");
        int sizeArr = sc.nextInt();
        int[] arr = new int[sizeArr];
        for (int i = 0; i < sizeArr; i++) {
            System.out.print("arr [" + i + "]: ");
            arr[i] = sc.nextInt();
        }


        // Xoa phan tu X


        System.out.println("Enter delete number: ");
        int x = sc.nextInt();
        deleteNumber(arr, x);
        for (int j = 0; j < arr.length; j++) {
            System.out.print(arr[j] + "\t");
        }
    }

        // Ham xoa phan tu

    static int[] deleteNumber(int[] array, int num) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == num) {
                for (int j = i; j < array.length - 1; j++) {
                    array[j] = array[j + 1];
                    if (array[array.length - 1] == array[array.length - 2]) {
                        array[array.length - 1] = 0;
                    }
                }
            }
        }
        return array;
    }
}
