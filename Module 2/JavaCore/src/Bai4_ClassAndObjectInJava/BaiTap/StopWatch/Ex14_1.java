package Bai4_ClassAndObjectInJava.BaiTap.StopWatch;

import java.util.Arrays;
import java.util.Collections;

public class Ex14_1 {
    public static void main(String[] args) {
        int [] number = new int[1000000];
        for (int i = 0; i < 1000000; i++) {
            number[i] = (int) Math.floor(Math.random()*1000000);
        }
        StopWatch stopWatch = new StopWatch();
        stopWatch.start();
        Arrays.sort(number);
        stopWatch.end();
        System.out.println(stopWatch.getElapsedTime());

    }
}
