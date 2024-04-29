# Child Process Module in Node.js

The `child_process` module in Node.js provides a way to spawn child processes from within a Node.js application. This module allows you to run other executable programs or shell commands from your Node.js application, interact with them, and handle their input/output streams.

## Methods

There are several ways to create child processes using the `child_process` module:

1. **`spawn()`:** This method is used to spawn a new process using a specified command. It returns a `ChildProcess` object that allows you to interact with the spawned process's stdin, stdout, and stderr streams asynchronously.

2. **`exec()`:** This method is used to execute a command in a shell and buffers the output. It is suitable for executing simple shell commands and retrieving their output as a callback function.

3. **`execFile()`:** This method is similar to `exec()`, but it allows you to specify a file to execute directly rather than running it through a shell.

4. **`fork()`:** This method is a special case of `spawn()` used specifically for creating new Node.js processes. It is particularly useful for creating child processes that run Node.js scripts.

## Example

Here's a brief example demonstrating the use of `spawn()` to execute a command:

```javascript
const { spawn } = require('child_process');

// Spawn a new process to list files in the current directory
const ls = spawn('ls', ['-l', '.']);

// Listen for data events from the child process
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Listen for errors, if any
ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Listen for the child process to exit
ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
