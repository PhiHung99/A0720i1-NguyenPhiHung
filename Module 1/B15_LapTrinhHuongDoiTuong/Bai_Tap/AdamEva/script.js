class Apple {
    constructor(weight) {
        this.weight = weight;
    }
}
class Human {
    constructor(name, gender, weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    eat(apple){
        if (apple.weight > 0){
            apple.weight--;
            this.weight++
        }
    }
    void(){
        console.log("Hello!!")
    }
    getCheck(person, check){
        switch (check) {
            case "1": {
                return person.name;
                break;
            }
            case "2": {
                return person.gender;
                break;
            }
            case "3": {
                return person.weight;
                break;
            }
            case "4":{
                return apple.weight;
                break;
            }
        }
    }
}
let weightApple = parseInt(prompt("Nhập vào khối lượng quả táo"));
let apple = new Apple(weightApple);
let nameAdam = prompt("Nhập tên adam:");
let weightAdam = parseInt(prompt("Nhập vào khối lượng adam"));
let adam = new Human(nameAdam, "male", weightAdam);
let nameEva = prompt("Nhập tên eva:");
let weightEva = parseInt(prompt("Nhập vào khối lượng eva"));
let eva = new Human(nameEva, "female", weightEva);
adam.eat(apple);
eva.eat(apple);
adam.void();
let check = (prompt("Kiểm tra: " + "\n" +
                    "1: name" + "\n" +
                    "2: gender" + "\n" +
                    "3: weight" + "\n" +
                    "4: apple"));
alert(adam.getCheck(adam, check));