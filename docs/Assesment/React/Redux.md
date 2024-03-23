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
- 