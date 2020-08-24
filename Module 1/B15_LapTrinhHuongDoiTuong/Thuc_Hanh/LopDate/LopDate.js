//Lớp có 3 thuộc tính: Day, month, year
class LopDate{
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;

    }
    getDay(){
        return this.day;
    }
    setDay(day){
        this.day = day;
    }
    getMonth(){
        return this.month;
    }
    setMonth(month){
        this.month = month;
    }
    getYear(){
        return this.year;
    }
    setYear(year){
        this.year = year;
    }
    setDate(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    toString(){
        return this.day + "/" + this.month + "/" + this.year;
    }
}
    let date = new LopDate(2, 2, 2007);
    let day = date.getDay(); // 2
    let month = date.getMonth(); // 2
    let year = date.getYear(); // 2007
    alert(day + "/" + month + "/" + year);
    date.setDay(10);
    date.setMonth(10);
    date.setYear(2019); //set đưa dữ liệu vào
    alert(date.getDay() + "/" + date.getMonth() + "/" + date.getYear());

    date.setDate(20,5,2020);
    alert(date.toString());





