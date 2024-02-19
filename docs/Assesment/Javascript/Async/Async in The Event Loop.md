# Async in the Event Loop

## Microtasks

- There is a special Queue for `Promises`, called the `Microtask Queue`. IT has priority over the callback queue.
- The event loop will first run all tasks in the microtask queue, and only then the regular queue.
- Sometimes it can happen that there are many tasks in the microtask queue, which means the regular tasks won't run from the regular queue.

## In Practice

```javascript
console.log('Test start');
setTimetout(()=>console.log('0 second timer'),0);
Promise.resolve('Resolved  promise 1').then(res=>console.log(res))
console.log('Test End');

// output 
//Test start
//Test end
//Resolved promise 1
//0 Second timer
```