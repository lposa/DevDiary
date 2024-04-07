# General Performance

- https://videoportal.epam.com/video/BYbZvwYX (maybe need EPAM vpn)

### When to optimize website?

- When it makes sense from a business perspective. Do user have complaints? Do users interact with a certain feature that is causing the perfromance to be worse?


### Stress test, load test. How to test performance?

- This is a non-functional test. Let's say we want to test how many users can be on our website before it crashes (stress test), how slow it becomes with the increase of users (load test) and how fast does it come back after a crash or even does it even come back?


### How does the browser render a html?

- Describe the critical rendering path.


### Why is it the best practice to have the CSS load in the header and the JS at the end of the file?

- It's all about what blocks the rendering. CSS blocks it, but we kind of need it for a good user experience. The JS we typically don't need for a first render, so we can load it after everything else.

### Difference between async and defer?

- Both allow to not block the DOM construction while downloading the resources.
- Async makes the script execute as soon as it’s downloaded, regardless of other scripts. This is useful for independent scripts, like analytics. 
- Defer downloads the script during HTML parsing but waits until the HTML parsing is completed to execute it. This is useful for scripts that need a fully built DOM and/or their execution order matters.

### Performance best practices/techniques, how it works? how it affects?

1. Lazy loading - ensure that some blocking resources are deferred until when needed. Using the `Intersection Observer API` is good for this.
2. Minification and compression of files - removing unused spaces, comments, unused code... Allows us to decrease bundle size.
3. Using HTTP2 - by decreasing the amount of connections we are spending less time to set up a link. HTTP uses text protocol, HTTP2 uses byte protocol.
4. Caching - we can leverage caching across browser cache, local cache, caching servers. Browser caching - what headers are responsible for browser caching? **Cache control**
5. Pre-loading and pre-fetching - browsers fetches resources when the browser is not busy and not when the user needs them. We can achieve this by using webpack magic comments and dynamic imports.
6. CDN - content delivery networks. 
7. Service Workers?
8. V8 Engine Optimization
9. React- Server Side Rendering
10. Using GraphQL

### CSS Animations. What type of animation is faster CSS or JS? 

- CSS is better in performance than JS. 

### What instruments can we use to make animations faster?

- Avoid repaint reflow in our JS Code.

### Memory leaks - what is the reason? how to fix?

- Using global variable a lot. Closures as well. Lets say we subscribe to a DOM element, but after a while this DOM element is removed but the subscription still exists. Also, timers, we need to clear them.
- How to measure this? Using Chrome Dev Tools, memory profiling.

### Inlining

- Inlining CSS and JavaScript refers to the practice of placing your CSS styles and JavaScript directly into your HTML document, rather than linking them as external files.

With CSS:

External: You use a link in the HTML head section to connect to an external .css file.
Inline: You place the CSS rules directly into the style attribute of the HTML tags, or within a style block inside the HTML document.
With JavaScript:

External: You use a script tag with a src attribute pointing to the .js file.
Inline: You place the JavaScript code directly inside a script tag within the HTML document.
While inlining can reduce the number of HTTP requests, thereby improving the load time (especially for small files or above-the-fold content), it does come with drawbacks. For one, it does not leverage browser caching benefits that you get with external files. Additionally, it can also make the HTML document larger and more complex, especially for large applications. It's best to use inlining sparingly, in specific situations where the performance gain would outweigh the downsides.
