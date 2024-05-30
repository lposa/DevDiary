# General Questions

1. Can you give some examples of where you would use a design pattern like Singleton, Mediator, or Proxy in a real-world application?

- Singleton: Imagine you're building an app that plays music and you only want one instance of the audio player in your application. Using the singleton pattern, you would ensure there's only one object controlling the audio play.

- Proxy: Let's say you're working with a large image file, and you want to delay loading the entire file until absolutely necessary. You can use a proxy as the stand-in, loading the actual image only when the proxy's display method is used.

- Mediator: Suppose you're building a chat-type UI where multiple user interface elements interact with each other. You might implement the mediator pattern to have a chat mediator, which handles the interactions and rules between the user input box, emoji picker, submit button, etc.


