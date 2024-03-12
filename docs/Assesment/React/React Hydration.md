# Hydration

https://www.youtube.com/watch?v=kZG3izJu7qE&ab_channel=Awesome

- Client side rendering - the process of building UIs in the browser. The server sends over an empty html shell and a JS bundle containing the instructions needed to build the app. Drawback: it can sometimes take long to download the JS bundle and build the app.
- Server side rendering - process of building the UI on the server, using some sort of framework such as NextJS. The HTML is computed on the backend, then sent to the browser which simply displays  it. Main benefit: once the response is received from the server, the end user sees the app instantly. The main drawback is that everything is static, so any JS events need to be downloaded additionally.
- A server side app might appear interactive, but it actually isn't. This is when HYDRATION comes into play.
- Once a server computed HTML reaches the browser, one or more JS files containing framework and custom code are also sent. 
- When these files reach the browser, the scripts are executed, the framework takes over, rebuilds the web app again on the client, registers the required event listeners and restores any app state associated with the session.
- When this process finishes the app will be considered Hydrated.
- SSR and Hydration will happen only once, when the user directly navigates to the page.


- React has something called `suspense`, which provides selective hydration on the client. Wrapping the component in a `<Suspense>` you can tell the server to de-prioritize that component.
