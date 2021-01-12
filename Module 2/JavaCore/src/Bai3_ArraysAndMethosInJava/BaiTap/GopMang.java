package Bai3_ArraysAndMethosInJava.BaiTap;

import java.util.Scanner;

public class GopMang {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        //*****1******//
        System.out.print("Enter Size Array 1: ");
        int sizeArrOne = input.nextInt();
        int[] arrOne = new int[sizeArrOne];
        for (int i =0; i < sizeArrOne; i++){
            System.out.print("arr [ " + i + " ] : ");
            arrOne[i] = input.nextInt();
        }
        //*****2*****//
        System.out.print("Enter Size Array 2: ");
        int sizeArrTwo = input.nextInt();
        int[] arrTwo = new int[sizeArrTwo];
        for (int j = 0; j < sizeArrTwo; j++){
            System.out.print("arr [ " + j + " ]: ");
            arrTwo[j] = input.nextInt();
        }
        //*****3*****//
        arrayAggregation(arrOne,arrTwo);

    }

    static void arrayAggregation(int[] arrOne, int[] arrTow){
        int[] arrThree = new int[arrOne.length + arrTow.length];
        for (int i = 0; i < arrOne.length; i++){
            arrThree[i] = arrOne[i];
        }
        for (int i = 0; i < arrTow.length; i++ ){
            arrThree[arrOne.length + i] = arrTow[i];
        }
        for (int i = 0; i < arrThree.length; i++){
            System.out.print(arrThree[i] + "\t");
        }
    }
}
