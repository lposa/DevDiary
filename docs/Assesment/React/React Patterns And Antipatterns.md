# React Patters and Anti-patterns

## Anti-patterns

1. Large components - we need to always look if we can refactor a large component into smaller components. This makes it easier to debug and test, improves readability.
2. Nesting components - defining a child component inside a parent component. Every time the parent gets rendered, the child component also gets re-rendered.
3. Too much work - too many pieces of state, too many things happening in a component. To fix this we can use the `useMemo()`, which will only re-render the component only when it's needed.
4. Too many divs - use fragments instead! 
5. Messy organization of files - make sure to have directories for each component. 
6. Huge bundle - when we ship our app to production, it will have a huge first initial load time, because it takes the browser a long time to download the JS code. We can use `lazy loading` of components to fix this
7. Prop Drilling - passing props down a lot of times. Fix with Redux, context, recoil, etc...
8. Prop Plowing - components with a lot of different props. Use the spread syntax to fix this. Do not overuse!
9. Coupled State - React 18 does now automatic batching, which means calling setState many times won't re-render the app that many times, but only once. We can also create custom hooks to fix this.