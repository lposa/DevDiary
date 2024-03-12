# Context API and useReducer

- Sharing data across components
- Create a context value and then provide that value when you wrap multiple components around it
- We can connect react state to context
- Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8298056#questions

```jsx
//shopping-cart-context.jsx
import { createContext } from 'react'

// this is usefull for autocompletion, although its not so important
export const CartContext = createContext({
    items: []
})

//App.jsx
import { CartContext } from "../store/shopping-cart-conext"
const [shoppingCart, setShoppingCart] = useState({
    items: []
});
// some code

const ctxValue = {
    items: shoppingCart.items,
    //exposing a function through context as well
    addItemToCart: handleAddItemToCart
}

return (
    //we also have to provide this value prop in here as well, otherwise it wont work. Here we connect it to the state and a function.
    <CartContext.Provider value={ctxValue}>
        // ... rest of the code
    </CartContext.Provider>
)
// now we have access to the context value in all components that are wrapped in here.
//example

//Cart.jsx
import { useContext } from 'react'
import {CartContext} from '../store/shopping-cart-context.jsx'
export default Cart({items, onUpdateItemQuantity}) {
    const cartCtx = useContext(CartContext)
    //...rest of code
    //now we can access the items such as cartCtx.items (but its empty now)
}
```

### What happens when Context Values Change?

- When a context changes, the component will get re-executed (re-rendered) by React.


### The Context Pattern 

- This allows us to take all the context related data from a component to a separate file.

```jsx
//shopping-cart-context.jsx
import { createContext, useState } from 'react'
import {DUMMY_PRODUCTS} from "../dummy-products.js"

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}
})

export default function CartContextProvider({children}) {
    const [shoppingCart, setShoppingCart] = useState({
        items: []
    })
    
    function handleAddItemToCart(id) {
        //...some code
    }
    
    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart
    }
    
    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>
}
 
// now in our App.js, we just wrap it with CartContextProvider!
```


### useReducer Hook

- What's a reducer? A function that reduce one or more complex values to a simpler one. 


```jsx
// a function outside the component, we don't need it to re-render
// the useReducer will make sure we always get the latest state value!
function shoppingCartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        // return a modified state
        return {};
    }
    
    
    return state;
}

//inside the component
// we connect it to our reducer function ,and set an initial state
const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: []
} );

// to call it:
// we need a type, type of action, to identify the action
// we need a payload, which is data we send to it
function handleAddItemToCart(id) {
    shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: id
    })
}

```