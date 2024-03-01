# Structural Patterns

- Organization of your code


## Module Pattern

- Organize your code into pure functions and modules. 
- Very commonly used, you may be using it without knowing it.

## Mixins Pattern

- Mix functions and instances of classes after they have been created.
- Basically, add a new function to an already created instance.

## Facade Pattern

- This is very common in React. Create a component, and call it in a one-liner. We use it every day.
- This is for hiding complexity.

## Flyweight Pattern

- Method to minimize recreating the same items twice and using less memory. Similar approach to the `singleton`


## Decorator Pattern

- Similar to mixins, where we decorate code with classes or code that came from another area.
- Take a class and extend it with other code.
- Not official in JS, but in Typescript.

## MVC (Model-View-Controller)

- Defines how an app should be split.
- Model = Data
- View = Visuals (HTML)
- Controller = Logic

## MVP (Model-View-Presenter)

- Almost the same as MVC. 
- Model = Data
- View = Visuals (HTML)
- Presenter = Logic
- Even though the same, View doesn't have to access the model, it has to go through the Presenter.

## MVVM (Model-View-ViewModel)

- View (stateless)
- Model (Data)
- React uses this a lot.
