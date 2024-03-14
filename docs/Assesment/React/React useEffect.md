# useEffect(), when to use it and when to not use it 

- Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8231828#questions

- Side effect is a function, value, that is not directly related to the rendering of the JSX.

- The `useEffect()` does not fire right away when the component renders, the JSX gets returned, that's when it fires.
- When there is an empty dependency, React executes the `useEffect` only once, after the components renders (Runs again only if the App.tsx re-renders).
- When there is no dependency, then the `useEffect()` renders after every render, and creates an infinite loop.


- Overusing `useEffect()` is a bad practice. Make sure you don't use it when you don't need it.

- The `useEffect()` can also accept a cleanup function
- The return function executes right after the `useEffect()` executes again or right before the component dismounts (removed from dom)
```jsx
useEffect(()=>{
    const timer = setTimeout(()=>{
        onConfirm();
    }, 3000)
    
    return () => {
        clearTimeout(timer);
    }
},[])
```

- According to AI about Cleanup:
  The function that you return in a useEffect hook is called a cleanup function. The cleanup function is run before the component is removed from the UI to prevent memory leaks. It's also run before subsequent effects as a way to clean up the previous effect if it's run more than once.

In your provided example, you have a timer that runs for 3 seconds. If the component is removed from the UI before the 3 seconds are up, you no longer want that timer running because it holds a function (onConfirm) that may change the state or props, leading to an error or unexpected behavior.

So when unmounting, React runs the cleanup function to clear the timer, preventing the onConfirm() from being called after the component has unmounted.

In essence, your cleanup function acts somewhat similarly to a componentWillUnmount lifecycle method in a class-based component. It's intended to handle any necessary cleanup actions, like invalidating timers, cancelling network requests, or cleaning up any subscriptions that were created in useEffect.


## useCallback()

- We can sometimes face an infinite loop, if as a dependency we pass a function to the `useEffect()`
- This happens because a function is an object, and each time React re-renders a component, it will recreate the function
```javascript
function test(){
    console.log('test');
}
function test2(){
    console.log('test')
}

console.log(test === test2) //will output false
```
- We can use the `useCallback()` hook to fix this. We can pass a function to the `useCallback` and a dependency.
- This way React makes sure a function is not recreated. 
- The dependency works exactly as in a `usEffect()`, we pass in a value that when changed, will trigger the recreation of the function wrapped in the `useCallback()`



###  useEffect() use cases?

1. Fetching Data
2. Listening to Events
3. Updating the Document Title
4. Debouncing the Input for Search Operations (delay execution to limit how ofter a function is called)
5. Autofocusing an Input
6. Triggering Animations