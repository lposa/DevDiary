# Composition vs. Inheritance 

- https://www.youtube.com/watch?v=nnwD5Lwwqdo&t=1s&ab_channel=WebDevSimplified

```javascript
class Monster {
    constructor(name){
        this.name = name;
    }
    
    attack(){
        console.log(`${this.name} attacked`)
    }
    
    walk(){
        console.log(`${this.name} walked`)
    }
}


class FlyingMonster extends Monster {
    fly(){
        console.log(`${this.name} flew`)
    }
}

class SwimingMonster extends Monster{
    swim(){
        console.log(`${this.name} swam`)
    }
}

class FlyingSwimmingMonster extends Monster{
    //now we have to duplicate the flying and swimming logic!!!!
    // this is where the idea of composion comes in!
}


//what if we do this instead?

function swimmer({name}) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = {name: name}
    
    return {
        ...monster,
        ...swimmer(monster)
    }
}

const obj = swimmingMonsterCreator("Monster");
obj.swim()
```


## Composition in React

- https://www.youtube.com/watch?v=of7isf3YBZ4&ab_channel=Academind

- We have a wrapper component (a shell), to which we pass a dynamic component to using `props.children`