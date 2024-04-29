# Layout Thrashing

**Layout Thrashing** occurs when a web browser has to recalculate the layout of a document multiple times before it can be rendered, leading to a noticeable performance hit. This usually happens when JavaScript relentlessly makes read-write operations on the DOM, causing the browser to "thrash", and thereby slow down due to multiple reflows and repaints.

Reflow, also commonly known as layout, is the process where the browser calculates the positions and geometries of elements in the webpage. Repaint refers to the process where the browser redraws the pixels on the screen.

Let's consider the following code as an example:

```javascript
const element = document.getElementById('my-element');

element.style.height = (element.clientHeight + 50) + 'px';
element.style.width  = (element.clientWidth  + 50) + 'px';
```

# Preventing Layout Thrashing

The problem of Layout Thrashing can be mitigated by batching reading (layout) and writing (paint) operations distinctly. For example:

```javascript
const element = document.getElementById('my-element');

const newHeight = element.clientHeight + 50;
const newWidth  = element.clientWidth  + 50;

element.style.height = newHeight + 'px';
element.style.width  = newWidth  + 'px';
```
In this optimized version of the code, we first perform all "read" operations and then follow them up with "write" operations. This way, the layout is calculated only once and no layout thrashing occurs.

Even as modern browsers continue to get better at optimizing for such situations, it's crucial to be mindful of how your scripts interact with the DOM for preventing Layout Thrashing. The general suggestion is to first read all your styles, then perform write operations as necessary, thus keeping reflows to a minimum and improving page performance.
