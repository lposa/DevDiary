# Proxy Pattern

- Consider a situation where you have a large image in your application and this image needs time to be loaded. Instead of making the client wait until the image loads, you could use the Proxy pattern. The proxy would immediately return a loading screen, and in the background, it would continue loading the image. Once the image is loaded, the proxy can redirect the client request to the loaded image.

Advantages of the Proxy pattern include:

It can control the access to the original object, which is useful for security concerns.
It can perform optimization like lazy initialization, caching, etc.
It can be used to add a level of abstraction to the functionalities of a cluster of independent objects.


Disadvantages include:

Code might become more complicated since you need to introduce a lot of new classes.
Response from the service might get delayed.
