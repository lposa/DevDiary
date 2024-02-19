# Creational Patterns

- Patterns that control the creation process of an object



### Prototype Class Pattern 

```javascript
class Car {
    constructor(doors, engine, color){
        this.door = doors;
        this.engine = engine;
        this.color = color;
    }
}

const civic = new Car(4, 'V6', 'gray')
```

### Constructor Pattern

- Use the example above
```javascript
class SUV extends Car {
    constructor(doors, engine, color){
        super(doors, engine, color);
        this.wheels = 4;
    }
}
```

### Singleton Pattern

- Prevents creating more than 1 instance of a class.

```javascript
let instance = null;

class Car {
    constructor(doors, engine, color){
        if(!instance){
            this.door = doors;
            this.engine = engine;
            this.color = color;
        } else {
            return instance;
        }
    }
}

const civic = new Car(4, 'V6', 'gray')
```

### Factory pattern

- Creating a mechanism that creates new objects
- Efficient in big large apps, where we need to create a large number of objects

```javascript
class Car {
    constructor(doors, engine, color){
        this.door = doors;
        this.engine = engine;
        this.color = color;
    }
}

const civic = new Car(4, 'V6', 'gray');

class CarFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4,'V6', 'gray');
                break;
            case 'honda':
                return new Car(4, 'V8', 'red');
                break;
        }
    }
}

const factory = new CarFactory();
const myHonda = factory.createCar('honda')
```

### Abstract Factory Pattern

- A company overseeing more factories
