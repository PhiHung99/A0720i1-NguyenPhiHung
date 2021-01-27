package Models;

public class Villa extends Services{
    private String vip; // tiêu chuẩn phòng
    private String comfortDescription; // mô tả tiện nghi
    private String areaSwim; // diện tích hồ bơi
    private String numberFloors; // số tầng

    public String getVip() {
        return vip;
    }

    public void setVip(String vip) {
        this.vip = vip;
    }

    public String getComfortDescription() {
        return comfortDescription;
    }

    public void setComfortDescription(String comfortDescription) {
        this.comfortDescription = comfortDescription;
    }

    public String getAreaSwim() {
        return areaSwim;
    }

    public void setAreaSwim(String areaSwim) {
        this.areaSwim = areaSwim;
    }

    public String getNumberFloors() {
        return numberFloors;
    }

    public void setNumberFloors(String numberFloors) {
        this.numberFloors = numberFloors;
    }

    @Override
    public String showInfor() {
        return "Vip: " + vip + '\'' +
                "Comfort Description: " + comfortDescription + '\'' +
                "Area Swim: " + areaSwim + '\'' +
                "Number Floor: " + numberFloors;
    }
}
