//Customer
class Customer {
    constructor(name, cmnd, birthday, email, address, typeCustomer, discount, quantityIncluded, typeRoom, rentDays, typeService) {
        this.name = name;
        this.cmnd = cmnd;
        this.birthday = birthday;
        this.email = email;
        this.address = address;
        this.typeCustomer = typeCustomer;
        this.discount = discount;
        this.quantityIncluded = quantityIncluded;
        this.typeRoom = typeRoom;
        this.rentDays = rentDays;
        this.typeService = typeService;
    }
    getName(){
        return this.name;
    }
    setName(name){
         this.name = name;
    }
    getCmnd(){
        return this.cmnd;
    }
    setCmnd(cmnd){
        this.cmnd = cmnd;
    }
    getBirthday(){
        return this.birthday;
    }
    setBirthday(birthday){
         this.birthday = birthday;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
         this.email = email;
    }
    getAddress (){
        return this.address;
    }
    setAddress (address){
        this.address = address;
    }
    getTypeCustomer(){
        return this.typeCustomer;
    }
    setTypeCustomer(typeCustomer){
        this.typeCustomer = typeCustomer;
    }
    getDiscount (){
        return this.discount;
    }
    setDiscount (discount){
        this.discount = discount;
    }
    getQuantityIncluded (){
        return this.quantityIncluded;
    }
    setQuantityIncluded (quantityIncluded ){
        this.quantityIncluded = quantityIncluded ;
    }
    getTypeRoom(){
        return this.typeRoom;
    }
    setTypeRoom(typeRoom){
        this.typeRoom = typeRoom;
    }
    getRentdays(){
        return this.rentDays;
    }
    setRentdays(rentDays){
        this.rentDays = rentDays;
    }
    getTypeService (){
        return this.typeService;
    }
    setTypeService (typeService){
        this.typeService = typeService;
    }

     // Phong cho khach hang
    totalPays(){
        let money = 0;
        if (this.getTypeService() === "Villa")   {
            money = 500;
        } else if (this.getTypeService()  === "House"){
            money = 300;
        } else if (this.getTypeService()  === "Room"){
            money = 200;
        }
        return this.getRentdays()*money*(1-this.getDiscount()/100);
    }
}