package Models;

public class Room extends Services {
    private String freeServices;

    public String getFreeServices() {
        return freeServices;
    }

    public void setFreeServices(String freeServices) {
        this.freeServices = freeServices;
    }

    @Override
    public String showInfor() {
        return null;
    }
}
