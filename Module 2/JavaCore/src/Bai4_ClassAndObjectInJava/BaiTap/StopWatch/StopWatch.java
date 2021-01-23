package Bai4_ClassAndObjectInJava.BaiTap.StopWatch;

import org.w3c.dom.ls.LSOutput;
import java.time.LocalDate;
import java.util.concurrent.TimeUnit;

public class StopWatch {
    long startTime;
    long endTime;

    public StopWatch() {
    }

    public StopWatch(long startTime, long endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public long getStartTime() {
        return startTime;
    }

    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }

    public long getEndTime() {
        return endTime;
    }

    public void setEndTime(long endTime) {
        this.endTime = endTime;
    }

    public void start() {
         startTime = System.currentTimeMillis();
    }

    public void end(){
         endTime = System.currentTimeMillis();
    }

    public long getElapsedTime(){
        return endTime - startTime;
    }
}
