# Redux 

-  A state management system. Helps us  manage state, across multiple components.
- Very similar to `Context`



# Redux VS. Context

- Why do we need `Redux` if we already have `Context`?
- Context has a couple of potential cons: 
1. Can introduce a quite complex setup, which is harder to maintain and manage. 
2. Performance. Context is good for low-frequency changes, and not high-frequency changes.

# How Redux works?

- it's all about having one, and just one, `Central Data(state) store`.
- Components `subscribe` to the `store`. And whenever data changes, the store notifies the components.
- Changing the data? Components never, NEVER, directly update state in the store. Instead, we use `Reducer Functions`
- Components trigger or dispatch `actions`, which is just a JS Object, that gets forwarded to the `Reducer Function`, who does the actions, and then returns a new state to the Store.


# Redux and Its Patterns

Redux is a **state management library** that helps manage global state in applications by enforcing a predictable **one-way data flow**. It is built on various design patterns like **Pub/Sub**, **Command**, and **Observer**.

---

## Key Concepts

### **One-Way Data Flow (The Redux Pattern)**

The cornerstone of Redux is its **one-way data flow**:
1. **Action**: Describes **what happened** (e.g., `{ type: 'INCREMENT' }`).
2. **Reducer**: Determines how the **state changes** based on the action.
3. **Store**: Centralized state container that holds the entire app’s state.
4. **UI Reactivity**: Components react to state changes by subscribing to the store.

**Data Flow:**

Action → Reducer → Store → UI

# Patterns in Redux

## **1. Publish/Subscribe (Pub/Sub Pattern)**

Redux uses a **Pub/Sub pattern** to notify when the state has changed. The Store acts as the **publisher**, and components or middleware subscribe to the Store to listen for updates.

### **How Redux Uses Pub/Sub:**
- **Publisher**: The Store publishes state changes whenever an action is dispatched.
- **Subscriber**: Components or listeners subscribe to the Store to get notified of updates.

    **Example of Pub/Sub in Redux:**

```javascript
// Subscribe to Store
store.subscribe(() => {
  console.log('State has changed:', store.getState());
});

// Dispatch Actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
```

## **2. Command Pattern**

The **Command Pattern** encapsulates an action or request in an object. In Redux, **Actions** are structured as commands.

### **How Redux Uses Command Pattern:**
- **Actions**: Objects that describe what happened (but do not contain logic for state updates).
- These commands are sent to the **Redux Store** via `dispatch`.

### **Example:**
```javascript
// Define an Action
const INCREMENT = { type: 'INCREMENT' };

// Dispatch the Action (Send the Command)
store.dispatch(INCREMENT);
```

## **3. Observer Pattern**

The **Observer Pattern** allows components to react automatically whenever the state changes.

### **In Redux:**
- **The Store acts as the Subject**.
- **React Components are Observers** that subscribe to state changes.

### **How Redux Uses Observer Pattern:**
- React integrates with Redux by subscribing components to the Store.
- Whenever the state changes, dependent components automatically re-render.

### **Example with React:**
```javascript
// Use a Redux Selector to Observe State
const counter = useSelector((state) => state.counter);
console.log(counter); // Automatically reacts to state changes
```
