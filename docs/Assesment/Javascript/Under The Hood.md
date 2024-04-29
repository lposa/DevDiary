# Under the Hood

### JavaScript Execution Context

- Contains the code that is currently running and everything that aids its execution.

### Lexical Environment

- Simple object that contains the Outer Environmental Reference and the Environment Record (envRec)


### Thread of execution

- JS executes the code line by line, which is the thread of execution. Its synchronous and a single-threaded language.

### Call Stack

- Stack is LIFO (last in first out). In the example, it goes through the code line by line, until it gets to a function invocation. Then it adds the functions to the call stack.

```javascript
function one() {
    return 1;
}

function two() {
    return one() + 1;
}

function three() {
    return two() + 1;
}

console.log(three());

/**** STACK ****/
//one
//two
//three
/**** STACK ****/
```

### Hoisting

- Makes some types of variables accessible/usable inthe code before they are actually declared. "Variables are lifted to the top of their scope"
- `Variable Object (VO)` is an object-like container created within an execution context. It stores the variables and function declarations defined.
- Variables declared with `let` and `const `keywords are store uninitialized
- Variables declared with `var` are stored with the default value undefined
- During the `execution phase`, we can invoke a function before we declare it, since we have a reference to the entire function in memory.
- The process of storing variables and function declarations in memory prior to execution of the code is known as hoisting.

![hoisting](hoisting.png)
![tdz](temporal-dead-zone.png)

### How JavaScript Engines Work

![engines](javascript-engine.png)

1. The Parser breaks down the code reading it line by line into multiple tokens and create NODES.
2. The engine uses 2 parsers (pre parser and parser). To reduce the time needed for loading a website, the engine tries not to parse the code that is not necessary right away.
3. The Pre-Parser handles code that may be used later on while parser handles code that is needed right away.
   - Example: clicking a button, that code is not needed to load the website. So it's in the pre parser, which send the code to the parser only if the button is clicked.
4. With the nodes, it creates an `Abstract Syntax Tree` (AST) which is a tree representation of the source code of a computer program.
5. The `interpreter` walks through the AST and generates `bytecode`.
6. Once the `bytecode` gets generated fully, the `AST` is deleted, clearing up memory space.
7. `Bytecode` is fast, but it can be faster. As the `bytecode` runs, information is being generated. It can detect if a certain operation happens often and the types of data that's been used.
   - Example: you invoked a function dozen of times. We can optimize that to run even faster. 
8. The `bytecode` and `type feedback` are sent to the `optimizing compiler`, which generates highly optimized `machine code`.
9. In order to reduce the time it takes to interpret the code, optimized machine code only handles cases the engine has seen before running the byte code. If we repeatedly use the same piece of code that is returned with the same data type over and over again,
the optimized machine code can simply be reused in order to speed things up. However, since JS is dynamically typed, it can happen that the same piece of code suddenly returns a different type of data. If that happens, the machine code gets de-optimized. 

### Interpreter vs. Compiler

- Interpreted language - source code is read and directly executed line by line.
- Compile language - source file will be first compiled in machine code or byte code, before being executed.

**What is better?**

- Interpreters are quick to get up and running. You don't have to go through the whole compilation step before running your code. But, what if you run the same code over and over again? If you are in a loop you have to do the same translation over and over again. The compiler has the opposite tradeof. It needs more time to get going because of the compile process, but then the code in loops runs faster, because it doesn't have to do the translation for each pass of the loop.
- The Compiler also gets to look at the code and make edits so that it'll run faster. These edits are called optimization. The interpretor is doing its work during run time, so it doesn't have time to do these optimizations. 
- Is JavaScript Interpreted or Compiled? It uses best of both worlds and has developed the `Just-In-Time Model`.


### JUST IN TIME JIT

![just-in-time](just-in-time.png)

- **Monitor/Profiler**:
  This part of the engine acts like a tracker, keeping an eye on the code as it runs. It determines which parts of code are frequently run (referred to as "hot") and which are less frequently run (referred to as "warm").

- **Baseline Compiler**:
  On identifying a section of code as "warm" (i.e., executed multiple times), it's forwarded to a "Baseline Compiler". This compiler swiftly produces a basic, optimized version of the code, leaving certain areas for further optimization.

- **Optimizing Compiler**:
  When a part of code is frequently executed (termed "hot"), it is sent to the "Optimizing Compiler". This compiler spends more time to produce a highly optimized version of the code.

- **Deoptimization/Bailout**:
  In the scenario where assumptions made by the "Optimizing Compiler" are incorrect — for example, due to different data types than normal or similar circumstances — the code can be deoptimized and sent back to the "Baseline Compiler".

- **Inline Caching**:
  For frequently accessed properties, JavaScript engines create "shapes" which help in speeding up property access. Inline Caching allows the engine to remember previous operations, so it can access properties directly without repetitive and costly lookups.

- Simpler version:
1. Code goes through **parsing**, generates AST (abstract syntax tree)
2. The AST then goes to the next step, **compilation**, and a machine code gets generated
3. Then we go to **execution**
4. The first time **execution** happens, it is a very de-optimized machine code, and this happens to get the code running as fast as possible.
5. But, then in the background, while program is already running, the machine code goes through **optimization** and gets recompiled.
6. The old de-optimized code gets swapped by the new optimized code.

### Garbage Collector

- Purpose is to monitor memory allocation and determine when a block of allocated memory is no longer need and reclaim it. This process is automated in JS by the Browser.

1. Whenever a variable object or function is created, a memory space is allocted to it.
2. The allocated memory is used by means of read/write operations
3. When the memory is no longer needed it released the memory space -> this is the garbace collection part.

- Uses two algorithms `Reference Counting` and `Mark and Sweep`
- The reference counting relies on the fact that any object is referenced by any other object or variable. If not, then it is released from memory.
```javascript
var obj = {
    x: {
        y: 2
    }
}
// when the value of the outer object is changed to a single number, the inner object can be released
```
- Small problem in this. Sometimes objects can reference each other and we end up creating cycles.
```javascript
function check() {
    var bar = {};
    var foo = {};
    bar.name = foo;
    foo.name = bar;
    
    return true
    
}

check()

// even though  the variables are out of scope outside of the function they would still remain in memory as per the algorithm , because both of the objects have properties referencing each other
```
- This above is a common cause of memory leaks (Circular References)
- This is where `Mark and Sweep` comes in. This assumes the knowledge of the set of rules called `the root`. In Javascript, the root is the global object. Periodically, the `Garbage Collector` will start from this root object, find all the object that are referenced  from these roots, then all the objects referenced from those roots and so on. Starting from the root the GC will find all the reachable objects and collect all non-reachable objects.
- Looking at the above example, JS can easily track down the name of the object, since the hierarchy is well-defined. When the function call returns, the two objects are no longer referenced by any resource that is reachable from the global root object so their allocated memory will be reclaimed.


## Javascript Event Loop

- Memory heap - where data is stored in JavaScript, large and unstructured
- Call-Stack - responsible for keeping track of all operations in line to be executed
- Queue - responsible for sending new functions to the stack, FIFO

### Web APIs

- Helps us create non-synchronous behavior. Not part of JavaScript but rather built on top of it.

- DOM API - allow us to manipulate DOM elements, html and css.
- FETCH API - used to fetch data from the server
- CANVAS - drawing, update pixel data in HTML elements, create 2d and 3d shapes
- Audio and video APIs - do interesting things with multimedia
- Storage APIs - store data on the client side (sessionStorage, localStorage)
- setTimeout, setInterval
- HTTP Requests

### Event Loop

- The setTimeout gets added to the call stack, JS recognizes that it has to wait a certain amount of time before running its callback and to free up JS thread, it gets transferred to the Web API thread.
- Two different `queue` - Microtask and Macrotask.
- In the Web API a timer runs that is as long as the setTimeouts timer. The callback doesn't get added back to the stack right away, but instead goes to the `queue`. This means the function has to wait for its turn. Once the call stack is empty, the first item from the queue gets added to the call stack. 
- `setTimeout`, `setCallback`, etc.. get added to the `Macrotask Queue`. 
- `Promise` callbacks, `then` and `catch` methods, get added to the `Microtask Queue`.
- `Microtask` queue has priority of execution.

![event-loop](event-loop.png)


### Extra info about JS

- Multi-paradigm language - means that it supports procedural, OOP and Function Programing.
- First class functions - means that functions are treated as variables. We can pass them to other functions and a function can return a function.
- Dynamically typed language - we don't assign types to variables, they only get known once the JS Engine runs our code.
-  JS Engine - a computer program that runs the JS code. Most popular one is V8 from Google, that also can run Node JS.


- Link to content: https://www.linkedin.com/learning/javascript-under-the-hood/garbage-collector-in-javascript?autoSkip=true&dApp=53239054&leis=LAA&resume=false&u=2113185


# Udemy Course

### How does execution happen? 

1. After compilation, when the code is ready to be executed, a `global execution` context is created. This is a place where all variables are stored that are necessary to run the code.
2. Then the execution of top level code happens.
3. For each function, a new execution context is created with all the necessary information to run it.

### What's inside the Global Execution Context?

1. Variable environment - all variables, functions, argument objects
2. Scope Chain - consists of references to variables that are located outside the current context
3. this keyword

- IMPORTANT: Arrow functions don't have the `argument object` and the `this` keyword
- All this gets generated in the `Creation Phase` that happens right before the `Executuion Phase`

### Scope and Scope Chain

- Where do variables live? How to access them? How the programs variables are organized and accessed? 
- Lexical scoping - scoping is controlled by placement of functions and blocks in the code
- Scope - space or environment a certain variable is declared. There are `global`, `function` and `block` scope.
- Scope of a variable - region of our code where a certain variable can be accessed

![scopes](scope.png)
![scopes](scope-chain.png)


- Note: purple block (block scope) doesn't have access to the yellow (functional) and vice versa because of lexical scoping. Siblings never have access to each other, just their parent.

![scopes-summary](scope-chain-summary.png)


### this Keyword

- this keyword/variable is a special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function on which the `this` keyword is used.
- this is not static, it depends on how the function is called, and its value is only assigned when the function  is acutally called.

![this-keyword](this-keyword.png)


### Primitives vs. reference values

![pvsr](primitive-vs-reference.png)

### Closures

- A closure is the combination of a function bundled together with references to its surrounding. In other words, a closure gives you access to an outer functions scope from an inner function.
```javascript
function human() {
    const name = 'Sina'
    function sayHi() {
        console.log(`Hi I am ${name}`)
    }
    sayHi()
}
//even better 
function human(name) {
   function sayHi() {
      console.log(`Hi I am ${name}`)
   }
   sayHi()
}
```

- Closures remember the outer function scope even after creation time.
- Closure variables are live references to the outer-scoped variable, not a copy.


# DIFFERENCE BETWEEN FUNCTION AND METHOD

- Function — a set of instructions that perform a task. Method — a set of instructions that are associated with an object.
- Never use an arrow function as a method in an object, because its `this` keyword refers to the first outer scope and not the object.

# Mark and sweep according to AI

Sure, I can provide a simplified explanation.

The Mark and Sweep algorithm is a traditional garbage collection algorithm used in JavaScript engines such as V8 (that powers Node.js and Google Chrome). The primary purpose of a garbage collector is to identify and automatically clean up ("collect") the pieces of memory that are no longer in use by the program.

Here's how the Mark and Sweep algorithm works:

**Mark Phase**:

1. The algorithm goes through all the active variables (also known as "roots"). These are typically variables currently in the call stack (like function parameters and variables), in global scope and similar.

2. It then "marks" all the objects these variables refer to.

3. It then checks the objects that these objects refer to, and marks them as well.

4. It continues doing so, marking all reachable (directly or indirectly) objects. This process is often called a "marking pass".

This way, all objects that can be accessed in some way get marked.

**Sweep Phase**:

1. After the "mark" phase completes, the garbage collector goes through all the objects in the memory.

2. If it finds an object that's not marked (i.e., it's unreachable and can't be accessed from any currently active part of the application), it means the application has no way of using that object. Therefore, this object can be safely removed to free up memory.

3. The garbage collector then de-allocates these unmarked objects, releasing the memory space they had been occupying for re-use by the program. This cleanup process is often called a "sweep pass".

By combining the Mark and Sweep phases, JavaScript engines can automatically manage memory, cleaning up objects that are no longer in use in the application. However, circular references can sometimes confuse this process or make it less efficient, which is why it's a good practice to manually ensure you avoid circular references if possible.

(Note: Modern JavaScript engines have optimization strategies to deal with circular references, so they're not necessarily problematic, but understanding why they could be is useful.)


- Link to content: https://www.linkedin.com/learning/javascript-under-the-hood/garbage-collector-in-javascript?autoSkip=true&dApp=53239054&leis=LAA&resume=false&u=2113185



