# Interview Questions

### 1. What is a higher order component?

- A way of reusing code. This makes the code more clean, efficient, modular and reusable. In simple words, a higher-order component is a function that takes a component and returns a new component with some additional props or behaviors. It's similar to how higher-order functions in JavaScript can take a function as an argument and return a new function. 


### 2. How does the React reconciliation algorithm works?

- Process by which React updates its components based on its props and states. There is the normal DOM, but React also has the Virtual DOM. React keeps tracks of these 2 versions of the DOM. React compares the Virtual DOM tree of the updated component to the Virtual DOM tree of the previous render, if there is any changes, React will trigger an update to the **actual** DOM.
- To optimize this, React can calculate the minimum amount of changes to the actual DOM in order to make the DOM sync with the Virtual DOM.
- This algorithm reduces the amount of the DOM manipulations, which in return, optimizes the app a lot.
- Link to content: https://www.youtube.com/watch?v=-UkV6To-7_g&ab_channel=PedroTech

### 3. How does React handle async updates and how does this can resolve potential race conditions?

- React uses **batching**, which means it groups a bunch of updates that occur in a single render cycle, into just one big single update. This improves performance.
- Race conditions is a situation when two or more components try to update the same state at the same time, which leads to unwanted behaviour. There are multiple techniques to prevent this from happening
- One way is to use `useState` and `useReducer`

### 4. How to solve optimization problems in React and is it good to always optimize?

- It is not always good to optimize the app, sometimes we can optimize too much which would actually diminish the optimization.
- One way of doing this is by using the React Developer Tools. The Profiler tab allows to record certain actions such as logout, and it gives you an overview of the changes. This can tell us how long a component needed to render and more. This gives us insight on which components we can revisit and  see how we can change it to optimize it.
- 
