# Webworkers

Service Workers are a type of Web Worker and a core component of Progressive Web Apps (PWAs). They act as a proxy server that sits between the web application, the browser, and the network. They run on a separate thread from the main JavaScript executing on a website, so they do not have access to the DOM and cannot block or delay rendering of the interface.

Service workers enable functionalities that require a persistent background processing, such as push notifications, background sync, and caching for offline availability. A well configured service worker can help give a native-app-like experience by making the application load faster and available offline.

One thing to note is that not all browsers support service workers, so their usage must be carefully considered if your app needs to support a wide range of browsers.
