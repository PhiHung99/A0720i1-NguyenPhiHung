package Bai3_ArraysAndMethosInJava.BaiTap;

import java.util.Scanner;

public class ThemPhanTuVaoMang {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter Size Array: ");
        int sizeArr = input.nextInt();
        int[] arr = new int[sizeArr];
        for (int i = 0; i < sizeArr; i++){
            System.out.print("Arr [ " + i + " ]");
            arr[i] = input.nextInt();
        }


        System.out.print("Enter index:");
        int index = input.nextInt();
        System.out.print("Enter add number:");
        int number = input.nextInt();

        addNewValue(arr, number, index);
        for (int j = 0; j < arr.length; j++){
            System.out.print(arr[j] + "\t");
        }

    }

    static int[] addNewValue(int[] array, int num, int index){
        for (int i = index; i < array.length - 1; i++){
                array[i+1] = array[i];
                array[index] = num;
                break;
        }
        return array;
    }
}
