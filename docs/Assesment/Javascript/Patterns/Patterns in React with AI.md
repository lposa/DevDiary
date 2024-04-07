# Patterns in React with AI

- Design patterns are well-proven solutions to common problems in software design that occur over and over again. They represent the best practices used by experienced software developers and can make your code more flexible, reusable, and understandable.
- The three types of design patterns are:

## Creational

- These patterns deal with object creation mechanisms and class instantiation. They provide a way to decouple a client from the actual classes it instantiates.

 - Example (Factory Pattern): A commonly used creational pattern in React is the Factory pattern, where you create objects without specifying the exact class of object that will be created. Here is a basic example in a React context:

```typescript jsx
function ComponentFactory(type) {
  switch(type) {
    case 'button':
      return <Button />;
    case 'text':
      return <Text />;
    default:
      return <DefaultComponent />;
  }
}

function App() {
  return <div>{ComponentFactory('button')}</div>;
}
```

- Pros: Decouples the creation logic making code easy to test and manage.
- Cons: Can lead to more complex code due to the creation of numerous factory methods, hence making the code harder to read.

## Structural

- These patterns deal with class and object composition to form larger structures that are easy to manage and communicate between.

- Example (Composite Pattern): A common example of the Composite pattern in React is the composition of components. Any React component can essentially be composed of other components.

```typescript jsx
function App() {
  return (
    <div>
      <Header />  // Header component
      <Body />  // Body component
      <Footer />  // Footer component
    </div>
  );
}
```

- Pros: High level of flexibility and easy to add new components.

- Cons: Can make the design overly general and increase complexity.


## Behavioral

- These patterns are concerned with algorithms and the assignment of responsibilities between objects.

- Example (Observer Pattern): In React, this could be achieved using setState. When state changes, the component re-renders, essentially "observing" changes to state:

```typescript jsx
import React, { useState } from 'react';

function ObserverComponent() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
```

- Pros: Establishes a mechanism for communication between objects.

- Cons: Can cause issues with event handling when multiple observers are tracking changes for multiple observables leading to unexpected side-effects.