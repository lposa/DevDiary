# Dependency Injection Vs Dependency Inversion Vs Inversion of Control

- https://medium.com/ssense-tech/dependency-injection-vs-dependency-inversion-vs-inversion-of-control-lets-set-the-record-straight-5dc818dc32d1
- https://www.youtube.com/watch?v=EPv9-cHEmQw&ab_channel=RyanSchachte
- https://www.youtube.com/watch?v=2ejbLVkCndI&ab_channel=ArjanCodes

## Inversion of Control 

- In traditional procedural programming, the code that controls the execution of the program — the main function — instantiates objects, calls methods and even asks the user for input so that the execution can continue and the program can achieve its task. With IoC, it is a framework that does the instantiation, method calls and triggers user actions, having full control of the flow and removing this responsibility from the main function, and by consequence the application.
- Lets say we have a user and a database. Typically, the user would create the instance of the database. What IoC says is that a framework will create this instance instead and hands it to the user class. 

## Dependency Injection

- Dependency Injection is a software design technique in which the creation and binding of dependencies are done outside the dependent class. Afterward, said dependencies are provided already instantiated and ready to be used, hence the term “injection”; in contrast to the dependent class having to instantiate its dependencies internally, and having to know how to configure them, thus causing coupling.


## Dependency Inversion Principle (DIP)

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.


## According to AI:

Dependency Injection (DI), Dependency Inversion Principle (DIP), and Inversion of Control (IoC) are all concepts and practices within object-oriented programming that help manage dependencies between different parts of a software system. A lot confusion stems from their interconnectedness, and they are often spoken about in overlapping contexts. Here's an attempt to distinguish between them:

Dependency Injection (DI): This is a specific technique in which an object receives its dependencies from outside from the external context instead than creating them internally. For example, suppose we have a class A that utilizes functionality from another class B. In a system without DI, A will create and manage an instance of B. However, with DI, some "injection" mechanism (constructor, setter, interface, etc.) ensures that A receives an instance of B to use from somewhere else in the system. This promotes loose coupling, enhances testability, and simplifies configuration.

Dependency Inversion Principle (DIP): This is one of the five principles of Solid Principles in object-oriented design and programming. This principle states that "high-level modules should not depend on low-level modules—both should depend on abstractions". Put simply, it's better to depend on abstractions than on concrete instances. This also allows you to switch the implementation of that dependency to another concrete instance, if needed.

Inversion of Control (IoC): IoC is a design principle which guides the design of frameworks. It postulates that the flow of control of a system should be inverted compared to traditional procedural programming, in which the custom, user-written code that expresses the purpose of the program calls reusable libraries to take care of generic tasks. Under IoC, it is the framework that calls the custom, user-written code. Hence, it ‘inverts’ the control as compared to traditional control flow. Dependency injection is one means of achieving IoC. It allows a client to remove all the knowledge of a concrete implementation that it needs to use. Hence, it helps to decouple the classes.

In essence, while these concepts are related and often used together, they refer to different things. DIP is a principle, DI is a method for realizing this principle, and IoC is a design pattern often used to manage dependencies and implement DI.
