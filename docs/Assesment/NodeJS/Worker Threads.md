# Worker Threads Module

- Enables the use of threads that execute JavaScript in parallel
- Code executed in a worker thread runs in a separate child process, preventing it from blocking your main application.


## Difference between clusters and worker threads?

- Clusters enable us to run multiple processes by creating multiple instances of NodeJS.
- Worker Threads create threads on a SINGLE NodeJS instance.
- When process isolation is not needed, that is, no seperate instances of the V8, event loop and memory are needed - you should use worker_threads.
