class TomJerry {
    constructor(name, weight, speed, alive){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.alive = alive;
    }
    sound(){
    }
}
// extends được sử dụng trong khai báo class hoặc trong class expressions để tạo ra 1 class con là con của class khác
class Jerry extends TomJerry{
    sound() {
        return "chit, chit"
    }
}
class Tom extends TomJerry{
    sound() {
        return "meo, meo"
    }
    catch(jerry){
        if (this.speed > jerry.speed){
            jerry.speed = 0;
            jerry.alive = false;
            return "Tom bắt được Jerry" ;
        } else {
            return "Tom không bắt được Jerry";
        }
    }
    eat(jerry){
        if (!jerry.alive){
            this.weight += jerry.weight;
            jerry.weight = 0;
            return "Jerry đã bị thịt";
        } else {
            return "Jerry vẫn còn sống";
        }
    }
}
let speedTom = parseInt(prompt("Nhập  vào tốc độ của Toom"));
let speedJerry = parseInt(prompt("Nhập  vào tốc độ của Jerry"));
let weightTom = parseInt(prompt("Nhập vào khối lượng của Toom"));
let weightJerry = parseInt(prompt("Nhập vào khối lượng của Jerry"));
let tom = new Tom("Tom",weightTom, speedTom, true);
let jerry = new Jerry("Jerry",weightJerry, speedJerry, true);
document.writeln(tom.catch(jerry));
document.writeln("<br>");
document.writeln(tom.eat(jerry));
document.writeln("<br>");
document.writeln("Khối lượng của Tom: " + tom.weight);

