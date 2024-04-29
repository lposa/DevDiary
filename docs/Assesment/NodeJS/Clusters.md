# Clusters

- Link to content: https://www.youtube.com/watch?v=SHR-KmfRIsU&ab_channel=Codevolution

- Node is single threaded. 
- No matter how many cores you have, node only uses a single core of your CPU
- This is fine for I/O operations, but if the code has long running and CPU intensive operations, your application might struggle from a performance point of view.

- NodeJS introduced Cluster Modules to handle this.
- The cluster module enables the  creation of child processes (also called workers) that run simultaneously.
- All created workers share the same server port.

- Never create more workers than there are CPU cores. It will only affect performance negatively.
- 
