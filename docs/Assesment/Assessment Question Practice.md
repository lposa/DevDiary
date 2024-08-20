# Assessment Practice Questions

1. What is the difference between inline element, block level element, and inline-block?

- Inline elements do not start on a new line and only occupy the width their content requires. Block-level elements start on a new line and occupy the full width available. Inline-block elements are placed as inline elements, but they behave as block-level elements.



2. What is common between inline and inline-block?

- Both are displayed in line with the surrounding content.



3. Which approach is used for responsive design?

- Responsive design uses fluid grid layouts, flexible images, and CSS media queries to adapt the layout to different screen sizes and orientations.



4. Are there any other ways to create a responsive page besides media queries?

- Yes, other ways include using fluid grids, relative units like percentages or viewport units, flexible images, and container queries.



5. What is the difference between adaptive and responsive design?

- Adaptive design uses static layouts based on breakpoints which don’t respond once loaded, whereas responsive design fluidly changes according to the screen size.



6. What are the ways to implement adaptive design?

- Using multiple fixed layout sizes, CSS media queries, and JavaScript to detect the screen sizes and load the appropriate layout.



7. Do you suggest any CSS framework for responsive design?

- Yes, popular frameworks like Bootstrap and Tailwind CSS are very effective for implementing responsive designs.



8. What is progressive enhancement and graceful degradation?

- Progressive enhancement focuses on providing the basic content to everyone and adding enhancements for capable browsers, while graceful degradation starts with all features enabled and removes them for older browsers.



9. What is CSS specificity?

- CSS specificity is a set of rules that browsers use to determine which CSS styles are applied to an element. It is based on the types of selectors used in a CSS rule.



10. Do you recommend using important in CSS?

- Using !important should generally be avoided because it can make debugging CSS harder by breaking the natural cascading rules. It's better to organize CSS to respect the specificity.



11. What is a critical rendering path?

- The critical rendering path refers to the steps the browser takes to convert HTML, CSS, and JavaScript into a rendered website on the screen.



12. Can you explain the process involved in the critical rendering path?

- It involves parsing HTML into the DOM, CSS into the CSSOM, combining these into a render tree, laying out the page, and finally painting it onto the screen.



13. Do you know about the CSS Object Model (CSSOM)? Is it part of the critical rendering path?

- Yes, the CSSOM is similar to the DOM but for CSS. It's an essential part of the critical rendering path as it holds the styles information needed to style the DOM elements.



14. How does JavaScript handle asynchronous tasks?

- JavaScript handles async tasks through mechanisms like callbacks, promises, and async/await which are added to the JavaScript event loop to handle asynchronous operations.



15. Can you explain microtask and macrotask queues?

- Microtasks handle promises, mutation observer callbacks and are processed after the currently running script. Macrotasks handle setTimeout, setInterval, I/O, and UI rendering. Microtasks have precedence over macrotasks.



16. What object-oriented principles are you aware of?

- Encapsulation, Inheritance, Abstraction, and Polymorphism are the 4 pillars of object-oriented programming (OOP).



17. What does abstraction mean?

- Abstraction is an OOP principle that involves hiding complex implementation details from the user, providing only the necessary information to the outer world.



18. Have you heard about prototype inheritance in JS?

- Yes, prototype inheritance allows JavaScript objects to inherit features from one another, using a prototype object called the prototype chain.



19. How does prototype chaining work?

- In prototype chaining, objects inherit properties and methods from their prototype. A prototype can have its own prototype, creating a chain of prototypes.



20. What is the benefit of switching from JavaScript to TypeScript?

- TypeScript offers static typing, advanced object-oriented features, and powerful tools for large-scale development which can improve developer productivity and code maintainability.


21. What is type aliasing in TypeScript?

- Type aliasing in TypeScript is a way to give a type a new name using the `type` keyword, which can be used to create aliases for primitive, union, intersection, or tuple types, making code easier to understand and maintain.



22. What is the difference between type aliasing and interface in TypeScript?

- Type aliases can handle primitive types and are used when you need specific union or intersection type declarations. Interfaces, on the other hand, are more suited for defining object shapes and can be extended or implemented in classes.



23. Do you have an idea about Node.js?

- Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript on the server-side. It is known for its event-driven architecture and non-blocking I/O capabilities which make it suitable for real-time applications.



24. What are the benefits of using Node.js?

- Some benefits include the ability to use JavaScript for both client and server-side, high scalability due to its asynchronous and event-driven nature, and a vast ecosystem of libraries through npm.



25. What are the differences between useMemo and useCallback hooks in React?

- `useMemo` is used to memoize values to optimize performance by preventing complex re-calculations. `useCallback`, on the other hand, is used to return a memoized callback function and is useful in preventing unnecessary re-renders by maintaining function identity.



26. Have you ever created a custom hook in React?

- Yes, creating custom hooks allows you to abstract component logic into reusable functions.



27. What should be considered when creating a custom hook? Any rules for creating a custom hook?

- When creating a custom hook, ensure it is generic enough for reuse across components, does not directly modify the DOM, and maintains consistent return types. Follow the rules of Hooks like calling them at the top level and not inside loops or conditional statements.



28. How does reconciliation work in React?

- Reconciliation is React’s algorithm for efficiently updating the DOM by comparing the current state of the render tree with the updates that result from state changes, and making only the necessary modifications to the DOM.



29. What is the importance of using keys in React, and how does it help?

- Keys help React identify which items have changed, are added, or are removed, and are crucial for optimizing re-rendering processes by allowing React to reuse DOM elements.



30. Have you used Redux?

- Yes, Redux is a popular library used for managing and centralizing application state which enhances predictability and debuggability.



31. How does data flow in Redux, and how does it work?

- Data in Redux flows unidirectionally: the React component dispatches an action, the Redux store runs the reducer function to update state accordingly, and then the store notifies the React component of the state change to re-render the component if needed.



32. What are the best practices to use in React for performance?

-  Some best practices include memoizing components using React.memo, using the useCallback and useMemo hooks, optimizing re-renders by properly managing state and props, code-splitting using React.lazy, and using virtualized lists for large datasets.



33. Suppose you have a React application and there is a performance issue. How will you check and analyze the application to see what is the issue?

- I would use React DevTools to analyze component renders and performance profiling. Checking for unnecessary re-renders, inspecting the component tree, and analyzing the state management can help identify performance bottlenecks.



34. Your application loads slowly, what will you check?

- I would check for heavy computations during the initial rendering, large assets or unoptimized images being loaded, inefficient fetching of data or rendering large lists or tables. JavaScript bundle sizes and lazy loading components can also be areas to inspect.

35. What are the things we can use to optimize the loading time of a React application?

- To optimize loading times, use techniques like code splitting, lazy loading components, optimizing images and assets, server-side rendering, using caching strategies, and minimizing third-party scripts.



36. Are you aware of any design patterns?

- Yes, design patterns like Singleton, Factory, Observer, and Strategy are common amongst software developers to solve common design challenges and improve code maintainability.



37. Have you ever come across a CORS issue?

- Yes, Cross-Origin Resource Sharing (CORS) issues are common when making HTTP requests to different domains from client-side code.



38. How can we avoid CORS issues?

- CORS issues can be avoided by correctly setting the CORS headers in the response from the server, like `Access-Control-Allow-Origin`, or by configuring a proxy to redirect requests.



39. Any security issue that can happen with your application?

- Common security issues include SQL injection, Cross-site scripting (XSS), Cross-site request forgery (CSRF), and data breaches due to improperly secured data.



40. How will you make sure the data from the form is safe? What should be considered to safely get that data to send to the server?

- To ensure data safety, use client-side validation, sanitize and validate all inputs on the server side, use HTTPS to encrypt data in transit, and ensure proper authentication and authorization checks are in place.



41. When you need to create a real-time application, what protocol will you use for communication?

- For real-time applications, using WebSockets or similar protocols like Socket.io which provide full-duplex communication channels over a single long-lived connection is effective.



42. How do different WebSocket implementations work?

- WebSocket creates a continuous connection between client and server, allowing for bidirectional data flow without having to repeatedly open connections and improving real-time capabilities.



43. Any other possibility apart from WebSockets for real-time communication?

- Alternatives to WebSockets for real-time communication include Server-Sent Events (SSE) and WebRTC which are suitable for specific use cases of one-way and peer-to-peer communications, respectively.



44. How to implement accessibility in any application?

- Implementing accessibility involves ensuring semantic HTML use, proper ARIA labels, keyboard navigability, color contrast ratios, and testing with screen readers along with following WCAG and ADA guidelines.



45. Experience in working with bundlers like Webpack?

- Yes, working with bundlers like Webpack helps in bundling various assets of the application, optimizing them, and improving the loading times with techniques like tree shaking and code splitting.



46. What are the features offered by Webpack or similar bundlers?

- Features include loaders to preprocess files, plugins for extending functionality, module resolution, and options to split code into chunks for better loading times.



47. Do you know what is technical debt?

- Technical debt refers to delayed maintenance costs resulting from earlier compromises in software development that prioritize speed or temporary solutions over perfect code.



48. How can we avoid technical debt?

- Avoiding technical debt involves adhering to coding standards, continuous refactoring, comprehensive testing, careful planning and documentation, and considering long-term implications when making decisions.



49. Do you think it is possible to completely avoid tech debt?

- Completely avoiding tech debt is challenging as development often involves trade-offs, but it can be minimized through best practices in software development and project management.



50. What happens if you have a huge tech debt, how to start dealing with it?

- Start by assessing and quantifying the tech debt, prioritize high-impact areas, make a plan for incremental refactoring, allocate time and resources for tech debt reduction, and prevent exacerbation by enhancing standards and practices.



51. Your business owner cannot see the benefits of handling the tech debt, what would you say to him?

- I would explain that addressing technical debt is crucial for long-term project health, as it can reduce future costs, minimize bug rates, improve team productivity, and ultimately enhance the scalability and maintainability of the application.



52. If you are the code reviewer, what are you checking?

- During code review, I check for code quality, adherence to coding standards and best practices, security vulnerabilities, performance issues, and ensuring that the code is clean, well-documented, and maintainable.



53. Can some parts of code review be automated and how?

- Yes, parts of code review can be automated using static code analysis tools, linters, and automated testing suites that can catch common errors, enforce style rules, and ensure that unit tests pass before code is reviewed manually.



54. Do you have experience with SonarCloud? What is the test coverage on your project?

- Yes, I have used SonarCloud for continuous code quality checks and code security analysis. The test coverage on our project is around 80%, which helps ensure that most of the code base is tested for regressions.



55. What design patterns do you know and can you explain them - SOLID, DRY, KISS?

- SOLID are principles aimed at improving software design and maintainability: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. DRY (Don’t Repeat Yourself) promotes the reduction of repetition. KISS (Keep It Simple, Stupid) emphasizes simplicity in design.



56. DRY - can you make an example?

- An example of DRY is using a single function to perform calculations required in multiple parts of an application rather than writing the same code logic multiple times in different places.



57. What is CI/CD?

- CI (Continuous Integration) and CD (Continuous Deployment/Delivery) are practices where developers frequently merge code changes into a central repository, after which automated builds and tests are run. Continuous Deployment involves the automated release of a validated build to a staging or production environment.



58. Do you know what is Husky? Do you have such on the project, and which steps do you cover?

- Husky is a tool that allows you to run scripts tied to various Git hooks. It ensures that commits, push actions, or other git processes trigger lint tests, code format checks, or any other project-specific tests or operations.



59. Describe the current pipeline on your project.

- The pipeline includes code commits triggering automated tests and code analysis through a CI service. Once tests are passed, code is merged into the main branch, where CD processes deploy the code to a staging environment for further manual tests. Successful staging tests trigger rollout to the production.



60. What branching strategy do you know?

- Common branching strategies include Git Flow, where features, releases, and hotfixes have separate branches and merge back to develop and main branches; and Trunk-Based Development, which involves shorter-lived branches for features.



61. How is the deployment process organized on your project?

- Deployments are automated through our CI/CD pipeline. Each code commit is built and tested automatically; passing builds are deployed to a testing environment and, upon approval, are pushed to production environments using blue-green or rolling update deployments to minimize downtime.


62. How are the deployments organized? What environments do you have in your pipeline?

- Deployments follow a multi-stage approach where code is moved through several environments: development, testing, staging, and production. The pipeline ensures code is rigorously tested. Automated deployment scripts facilitate moving code from one environment to another after successful validation.



63. You are using a git branching strategy - how does the whole process go?

- In Git branching strategy, developers branch off from the main branch typically using feature branches to isolate feature development. Changes are committed to this branch until the feature is complete. Then, it undergoes a code review, and if approved, it is merged back into the main branch, often followed by continuous integration processes to ensure integration and testing.



64. Estimations - how do you do it?

- Estimations are performed by assessing the complexity, time, and resources required for tasks using techniques like Planning Poker, T-shirt sizing, or utilizing historical data. Team consensus is typically used to agree upon estimations.



65. What happens if you and another team member have different estimations? What would it be if you have 8 and the member has 2?

- In such cases, it’s crucial to discuss why each person has given their estimation. Understanding the rationale behind each estimate can lead to a more informed consensus or an adjusted estimate reflecting the team's collective view.



66. For which situations would T-shirt sizing estimation be better?

- T-shirt sizing is beneficial when there is a need for a quick, relative sizing of tasks among a group, especially useful during the early stages of development where exact time estimations are difficult to ascertain.



67. How much is the story-point?

- A story point is a unit of measure used in Agile project management to estimate the effort required to implement a user story. The value is usually relative and differs from team to team based on complexity, risk, and effort.



68. What is the size of 1-story point on your project?

- In our project, 1 story-point might represent a simple task with minimal complexity and risk, typically expected to take a few hours to complete.



69. How can a new team member understand what is 1 story point?

- By participating in estimation meetings, seeing how other team members evaluate and compare user stories, and reviewing similar past user stories and their point values, a new member can grasp the concept of what constitutes 1 story point.



70. You have 2 team members, and some of them have conflicts? What will you do?

- To address conflicts, facilitate a mediating conversation allowing each party to express their concerns and perspectives, identify mutual agreements, and work towards a resolution. Provide clear communication and appropriate team policies or procedures as a framework for resolving such issues.



71. What would you do if you have a conflict with some team members?

- I would seek to understand their perspective, openly communicate my concerns, and work collaboratively to find a mutually acceptable resolution to the conflict, ensuring it doesn’t affect the team dynamics or project progress.



72. How would you onboard a new team member on your project?

- Onboarding a new team member involves introducing them to the team, providing comprehensive resources about the project, arranging training sessions on the tools and practices we use, and assigning a mentor for guidance and support.



73. You have 5 new developers, juniors, mediors… how would you onboard them?

- Each developer would receive role-specific onboarding tailored to their experience level, alongside general introductions to the project's workflow, codebase, and team culture. Continuous support and regular check-ins would ensure they integrate smoothly.



74. You have to remove one of the members, how would you choose which one?

- If necessary to remove a team member, the decision would be based on factors like performance metrics, contribution levels, adaptability, and team dynamics. It’s crucial to ensure the process is fair, transparent, and compliant with company policies.



75. What motivation techniques do you know? How would you motivate your team?

- Motivation can be fostered by recognizing achievements, setting clear goals, providing growth opportunities, maintaining open communication, and creating a positive and inclusive team environment. Regular feedback and addressing individual motivators are key.



76. Your project is difficult, stakeholder, tasks…what to do then, how to motivate them?

- Clear communication about the challenges, regular updates, ensuring stakeholder involvement in decision-making, acknowledging their concerns, and aligning project goals with their expectations can significantly motivate and engage stakeholders.



77. What delegation techniques do you know?

- Effective delegation involves defining the task clearly, choosing the right person for the task, providing the necessary resources and authority, setting clear expectations, and monitoring progress while offering feedback and support.



78. Which is your favorite question from this session?

- Discussions about handling technical debt resonate strongly because they involve strategic decision-making that balances short-term gains with long-term sustainability. 
