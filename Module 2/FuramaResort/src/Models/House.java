package Models;

public class House extends Services {

    private String vip;
    private String comfortDescription;
    private String numberFloor;

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

    public String getNumberFloor() {
        return numberFloor;
    }

    public void setNumberFloor(String numberFloor) {
        this.numberFloor = numberFloor;
    }

    @Override
    public String showInfor() {
        return "Vip: " + vip + '\'' +
                "Comfort Description: " + comfortDescription + '\'' +
                "Number Floor: " + numberFloor;
    }

}
