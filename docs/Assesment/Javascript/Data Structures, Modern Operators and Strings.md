# Data Structures, Modern Operators and Strings

## Array and Object destructuring

```javascript
const arr = [2, 3, 4]
const [x, y, z] = arr;

const obj ={name:'Leo', job: 'worker'}
const {name, job} = obj;
```


## Spread operator

- Works on all iterables (arrays, strings, maps, sets) and also objects since ES2018.

```javascript
const arr = [7,8,9];
const badNewArr = [1, 2, 3 , arr[0], arr[1], arr[2]];

//since ES6
//same thing, but better
const goodNewArr = [1, 2, ...arr];


const str = 'Leonard';
const letters = [...str, '' , 'S.'];
//this will give us each letter of the string

```

- Used also to create `shallow` copies of arrays

```javascript
const arrayCopy = [...arr]
```

## Rest pattern and parameters

- Rest - it takes the rest, unused elements
```javascript
// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3,4]]

// REST, befcause on the LEFT side of =
const [a,b, ...others]=[1,2,3,4,5]
```

- In functions, very cool use case REST PARAMETERS:
```javascript
const add = function (...numbers){
    console.log(numbers)
}
add(2,3)
add(1,2,3,4);
add(8,2,2,3,5,2,1,4)

// output is array, because rest takes them and puts them into an array
```


## Nulish Coalescing Operator (??)

- Works with nullish values -> null and undefined (NOT 0 or '')

## Logical Assignment Operators

```javascript

const rest1 ={
    name: 'Capri',
    numGuests: 20,
}

const rest2 ={
    name: 'La Piazza',
    owner: 'Leonard Posa'
}

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

//this does the same thing, assigns the value if variable is false
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

//but what if numGuests is 0? that is a falsy value. This can cause bugs
//we have a good way of solving this, nulish operator so null values (null or undefined)

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//also works with the & operator

rest1.owner &&=  'Leo';
rest2.owner &&= 'Leo';
```

## Looping arrays: The for-of loop

```javascript
const menu = [...restauran.starterMenu, ...restauran.mainMenu]

for (const item of menu) console.log(item);

for (const item of menu.entires()) {
    console.log(item) //this gives index too
    
}

//we can also do
for (const [i,el] of menu.entires()) {
    console.log(i) //this gives index
    console.log(el)

}
```

## Enhanced Object Literals

```javascript
//this is a object literal, because we literally wrote the object
const openingHours = {
    thurs:{
        open: 0,
        close: 24,
    },
    frid:{
        open: 0,
        close: 24,
    }
}

const restauran = {
    name:'Restauran 1',
    owner:'Leo',
    //older way of adding the upper object in here
    openingHours: openingHours,
    //newer way of doing this
    openingHours,
    
    //older way of writing functions
    order: function (starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    //new way of doing this
    order(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    }
}
```


## Optional Chaining


```javascript
//this object is above
//this will give an error
console.log(restaurant.openingHours.mon.open)

//this is a way better way to do it, it returns undefined
console.log(restaurant?.openingHours?.mon?.open)
```

## Looping Objects: Object Keys, Values and Entries

```javascript
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
// output ["thu","fri","sat"]

let openStr = `We are open on ${properties.length}`

for (const day of properties){
    openStr += `${day}, `
}

console.log(openStr);
// Output We are open on 3 days: thu, fri, sat,

// Property VALUES
const values = Object.values(openingHours);
console.log(values)

// Entire object
const etries = Object.entries(openingHours);

for(const [key, {open,close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Output: On thu we open at 12 and close at 22;
//Very powerful!
```

## Sets

- A collection of unique values.

```javascript

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissotto', 'Pasta', 'Pizza'])
// this will actually just return ['Pasta', 'Pizza','Rissoto'];

// some methods
ordersSet.add('Garlic Bread');
ordersSet.delete('Garlic Bread');
ordersSet.clear();
```

## Maps

- Maps are a lot more useful than sets. Data structure that we can use to map values to keys. Stored in key-value pairs.
- Key can be any type, while on objects they are strings. 

```javascript
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1,'Firenze, Italy');
rest.set(2,'Lisabon, Portugal')

//we can chain
rest.set('categories',['Italian,Pizzeria']).set('open',11).set('close',21).set(true,'We are open');

console.log(rest.get('name')) // Classico Italiano
console.log(rest.has('name')) //true
rest.delete(2); // deletes 
console.log(rest.size); // output size 

rest.set(document.querySelector('h1'), 'Heading');
```

- Iterating through maps:
```javascript
const question = new Map([['question','What is the best programign language in the world?'],
[1,'C'],
[2, 'Java'], [3,'Javascript'],
    ['correct',3],
    [true,'correct'],
    [false,'try again']
])

console.log(question.get('question'));
for (const [key,value] of question){
    if(typeof key === 'number'){
        console.log(`Answer ${key}: ${value}`)
    }
}
const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answer));

// Convert map to array

console.log([...question])
```

## When to choose which data structure?

- Sources of data: 
1. From the program itself
2. From the UI
3. External Sources such as web API

- Do we need a simple list? -> array or set
- If we need key/value pairs? -> object or map

### Arrays vs. Sets

- Arrays: 
1. Use when you need ordered list of values (might contain duplicates)
2. Use when you need to manipulate data

- Sets:
1. Use when you need to work with unique values
2. Use when high-performance is really important
3. Use to remove duplicates from arrays

### Objects vs. Maps

- Objects: 
1. More traditional key/value store
2. Easier to write and access values with . and []

- Maps:
1. Better performance
2. Keys can have any daya types
3. Easy to iterate
4. Easy to compute size

## Operations with strings

```javascript
const airline = 'TAP Air Portugal';
const plane = 'A320'

console.log(plane[0]); // A 
console.log(plane[1]); //3 
//and so on

console.log(airline.length) // 16
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('portugal')) //-1 since case sensitive

console.log(airline.slice(4)) //Air Portugal, starts to exact at index 4
console.log(airline.slice(4,7)) // Air, start at 4 end at 7

console.log(airline.slice(0),airline.indexOf(' ')); // extract first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)) // extract last word
```