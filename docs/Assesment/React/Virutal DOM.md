# React Virtual DOM

- React works with a Virtual DOM. It creates and compares the Virtual DOM Snapshots to find out which parts of the rendered UI need to be updated.

1. React creates Component Tree
2. Creates a Virtual Snapshot of the Target HTML Code
3. Then React compares that new snapshot to the old snapshot
4. If the app just started, there is no old snapshot, so React just updates the real DOM
5. When comparing old snapshot to the new snapshot, and sees that something changed, React goes ahead and updates the Real DOM with the new changes.

When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

Two elements of different types will produce different trees.
1. The developer can hint at which child elements may be stable across different renders with a key prop.
2. In practice, these assumptions are valid for almost all practical use cases.


# React's Reconciliation Algorithm

React's reconciliation algorithm is responsible for updating the DOM efficiently when state or props change. It operates in two phases:

1. **Diffing Phase (also known as the Render Phase)**: This phase is responsible for determining the changes needed due to state or props changes. The complexity of this phase is O(n), where `n` is the number of elements in the tree.

2. **Commit Phase**: In this phase, the changes determined in the diffing phase are applied to the DOM. The complexity of this phase depends on the number of actual changes, not the size of the tree.

During the diffing phase, React compares the new Virtual DOM tree with the old one (i.e., the current tree in the DOM). It does this by visiting each node in the tree and comparing it with the corresponding node in the new tree (if one exists). The comparison process follows certain rules, like comparing the types of elements, and recurses on their children. This process results in the complexity of O(n).

However, by working in alignment with React's reconciliation, significant optimization can be achieved. For instance, by providing a unique `key` prop when rendering arrays of children, React can avoid creating new components and re-rendering existing ones when the order of the elements in the array changes. This results in a significant reduction in the actual number of operations.

Therefore, in the common case and especially when best practices are followed, React's reconciliation algorithm can be highly efficient.

# Why is Virtual DOM Faster Than Actual DOM?

Working with the Virtual DOM (VDOM) is faster than working directly with the actual DOM due to a few key reasons:

1. **Batched Updates:** In the Virtual DOM, React can batch multiple updates to the DOM together. This results in fewer updates to the actual DOM and fewer reflows (a reflow is a process where the browser recalculates the layout of the web page), which are expensive operations.

2. **Diffing Algorithm:** React uses a diffing algorithm to compare the current Virtual DOM with the new Virtual DOM. The new Virtual DOM is generated whenever a state or props change occurs. React updates only the real DOM nodes that correspond to the differences between the old and new Virtual DOM. React doesn't need to update the entire DOM tree. So, if only a small part of your UI changes, only that part is updated in the real DOM.

3. **Independent of Actual DOM Implementation:** The VDOM is a lightweight JavaScript object, while the actual DOM nodes are full-fledged objects with many more properties and methods. It's faster to manipulate JavaScript objects than to interact with the actual DOM API. Additionally, the VDOM can make your application architecture cleaner and less dependent on specific browser implementations of the DOM.

Remember, although the Virtual DOM can offer performance benefits, it's not always faster in every case. The performance gain depends on the nature of the updates and the size of the application. However, the biggest benefit of using React and the Virtual DOM is not raw performance. Rather, it's the simplicity and the declarative nature of the Virtual DOM that helps developers build complex UIs more intuitively.
