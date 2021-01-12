package Bai3_ArraysAndMethosInJava.BaiTap;

import java.util.Scanner;

public class CheckMaxArrayTowDimensional {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter number X: ");
        int indexX = input.nextInt();
        System.out.print("Enter number Y: ");
        int indexY = input.nextInt();
        int[][] arr = new int[indexX][indexY];
        for (int i = 0; i < indexX; i++){
            for (int j = 0; j < indexY; j++){
                System.out.print("arr [ " + i + "," + j + "]");
                arr[i][j] = input.nextInt();
            }
        }
        checkMax(arr);
//        System.out.println(arr.length);
//        System.out.println(arr[indexY].length);
    }

            //Tìm max mảng 2 chiều

    static void checkMax(int[][] array){
        int max = array[0][0];
        int maxX = 0; int maxY = 0;
        for (int i = 0; i < array.length; i++){
            for (int j = 0; j < array[i].length; j++){
                if (array[i][j] > max) {
                    max = array[i][j];
                    maxX = i;
                    maxY = j;
                }
            }
        }
        System.out.println("Max: " + max );
        System.out.println("Ordinate X: " + maxX + "\n" + "Ordinate Y: " + maxY);
    }

}
