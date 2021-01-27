package Models;

public abstract class Services {

    private String id;
    private String name; // tên dịch vụ
    private String area; // diện tích sử dụng
    private String price; // chi phí thuê
    private String amount; // số người
    private String typeRental; // loại cho thuê

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getTypeRental() {
        return typeRental;
    }

    public void setTypeRental(String typeRental) {
        this.typeRental = typeRental;
    }

    public abstract String showInfor();
    // để void vẫn được, để String để đọc ghi file.
}
