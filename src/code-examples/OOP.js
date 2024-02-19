const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate=function(){
    console.log(this.speed + 10)
}

Car.prototype.break=function(){
    console.log(this.speed - 5)
}

const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)

car1.accelerate()
car1.break()
car2.accelerate()
car2.break()

// using ES6 class

class CarClass {
    constructor(make, speed) {
        this.speed = speed;
        this.make = make;
    }

    accelerate() {
        console.log(this.speed + 10)
    }

    break() {
        console.log(this.speed - 5)
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }

}

const ford = new CarClass('Ford', 120);
console.log(ford.speedUS)
ford.accelerate()
ford.accelerate()
ford.break()
ford.speedUS = 50
console.log(ford)


const ElectricCar = function (make, speed ,charge) {
    Car.call(this, make, speed )
    this.charge = charge;

}

// Link prototypes
ElectricCar.prototype = Object.create(Car.prototype)

ElectricCar.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

ElectricCar.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`)
}


const tesla = new ElectricCar('Tesla', 120, 23)
tesla.chargeBattery(90)
console.log(tesla)
tesla.break();
tesla.accelerate();
