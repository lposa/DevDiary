# Node.js Common Questions & Answers

1. **What is Node.js?**

   Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It uses a non-blocking, event-driven model and provides an efficient environment for building highly scalable network applications.

2. **What is the Event Loop in Node.js and why is it significant?**

   The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations, despite JavaScript being single-threaded. It enables Node.js to handle many concurrent connections, making it optimal for building high-performance network applications.

3. **What are the differences between Node.js and a browser when running JavaScript code?**

   Differences include: global objects (`global` in Node.js vs `window` or `self` in browsers), Node.js giving access to the file system, ability to stream data, network programming with sockets, among others.

4. **What is the primary use-case for the 'fs' module in Node.js?**

   The 'fs' module provides methods for performing file-system operations. By using it, you can read, write, delete files, create & read directories and much more.

5. **What is the purpose of Node.js module.exports and how do you use it?**

   The `module.exports` object is used to expose modules for use in other files. It allows us to export functions, objects, or values from a file, making them accessible via the `require` function in another file.

6. **Can you explain what is non-blocking in Node.js?**

   Non-blocking refers to the way Node.js operates on its inputs using an event-driven approach, which makes it possible for Node.js to handle concurrent operations in a single thread.

7. **Describe the process and benefits of clustering in Node.js?**

   Clustering in Node.js allows you to fork child processes (which are instances of the main Node.js process) on the same server, on different ports. Each child process runs on its own V8 instance, and has its own memory space.

8. **What is a package.json file in a Node.js project, and what is its purpose?**

   The `package.json` file is a core element of Node.js projects. It serves as a manifest for your project, and includes metadata about the project, such as its name, the author, and a list of its dependencies.

9. **What is middleware in the context of a Node.js webserver, like when using Express.js?**

   Middleware functions are functions that have access to the request object, the response object, and the next function in the application’s request-response cycle. They are used to modify `req` or `res`, or to execute any code, end the request-response cycle, or call the next middleware in the stack.

10. **What is an event emitter in Node.js and give an example of its usage.**

    An EventEmitter is a part of the Node.js `events` module and it allows us to create and manage custom events easily. Essentially, an emitter object emits an event, and listener functions are invoked.

11. **What is callback hell and how might you reduce or avoid it in Node.js?**

    Callback hell refers to the situation where callbacks are nested within callbacks, potentially making the code harder to read and understand. Using Promises, async/await, or using modular design patterns can help avoid callback hell.

12. **How would you manage and mitigate errors in a Node.js application?**

    You can manage errors in Node.js using several strategies including using `try..catch` blocks, listening for error or rejection events, handling errors in callbacks, or using error handling libraries.

13. **What is a buffer in Node.js and how they are used?**

    A Buffer is a temporary storage spot for a chunk of data that is being transferred from one place to another. The Buffer class in Node.js is designed to handle raw binary data.

14. **What is REST and how is it used when creating API endpoints in Node.js?**

    REST (Representational State Transfer) is an architectural style that defines a set of constraints to be used when creating web services. In a RESTful API, you define resources and how they should be accessed.

15. **What is the purpose of package managers like npm or yarn in Node.js development?**

    Package managers like npm or Yarn help to manage your project’s dependencies, and also provide a uniform set of commands to manage the packages.

16. **What are Streams in Node.js and how do they work?**

    Streams are objects that let you read data from a source or write data to a destination in a continuous manner. They can be readable, writable, or both. Streams are especially useful for working with large amounts of data.

17. **What testing methods/tools might you use to unit test your Node.js application?**

    There are various tools and libraries available for testing in Node.js, including assertion libraries for writing test cases, test runners for running the tests, and spying and mocking libraries for creating test doubles.

18. **What is Node.js' event-driven architecture?**

    The event-driven architecture means that Node.js reacts to events and calls the corresponding event handlers. The 'events' module in Node.js can be used to emit and handle custom events.

19. **What happens when an error is not caught in a Node.js application? How would you handle such a scenario?**

    If an error is not caught, it might crash the Node.js application. So, catching and properly handling errors is crucial for the stability of the application.

20. **What is JSX and how is it used in a Node.js application?**

    JSX is a syntax extension for JavaScript used in the React library for constructing user interfaces. You might use JSX with React on the server-side in Node.js for server-side rendering.

21. **What is error-first callback in Node.js?**

    It is a convention in asynchronous Node.js functions where the first argument passed to the callback is an error argument. If there is no error, the argument will be `null` or `undefined`. If there is an error, it will contain information about the error.
