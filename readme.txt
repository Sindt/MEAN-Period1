1.Explain the use of: "use strict"

Strict mode enables more warnings and makes JavaScript a cleaner language.
To switch it on, type 'use strict' first in a JavaScript file or a <script> tag
(You can also enable strict mode per function).

2.Variable/function-Hoisting

Function declarations are hoisted—moved in their entirety to the beginning
of the current scope. Each variable declaration is hoisted:
the declaration is moved to the beginning of the function,
but assignments that it makes stay put.

3.this in JavaScript and how it differs from what we know from Java/.net.

Whenever a function is contained in the global scope, the value of this inside of that function will be the global object (window in a browser) or undefined if in strict mode
Whenever a function is called by a preceding dot, the object before that dot is this.
Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
Whenever JavaScript’s call or apply method is used, this is explicitly defined.

4.Function Closures and the JavaScript Module Pattern

Each function stays connected to the variables of the functions that surround it,
even after it leaves the scope in which it was created.
A closure is a function plus the connection to the variables of its surrounding scopes.
By returning an object or variable and assigning it to a variable outside of the function,
we can expose whatever we wish to the outside world, so we can have both public and private methods.
That's The module Pattern.

5.Immediately-Invoked Function Expressions (IIFE)

IIFE (immediately invoked function expression),  is a pattern for using a function
in a block-like manner, for example, to prevent a variable from becoming global.
IIFE can be used by using an anonymous function (no name is given to it and it is not assigned to a variable),
that immediately executes itself.

6.JavaScript Prototyping

Every JavaScript object has a prototype. The prototype is also an object.
All JavaScript objects inherit their properties and methods from their prototype.


7.Use the Debugger to explain about the basic "things" all objects inherits from object

Searching for errors in programming code is called code debugging.
Built-in debuggers can be turned on and off, forcing errors to be reported to the user.
With a debugger, you can also set breakpoints (places where code execution can be stopped), and examine variables while the code is executing.

8.User defined Callback Functions

Callbacks are functions that are executed asynchronously, or at a later time.
Instead of the code reading top to bottom procedurally, async programs may execute different functions at different times,
based on the order and speed that earlier functions like http requests or file system reads happen.

9.Explain generally about node.js and NPM.

Node.js is an open source project designed to help you write JavaScript programs that talk to networks,
file systems or I/O sources. Node does I/O in a way that is asynchronous which lets it handle lots of different things simultaneously.

Node core is made up of about two dozen modules, some lower level ones like events and stream some higher level ones like http and crypto.
For everything else there is npm. Anyone can create a new node module that adds some functionality and publish it to npm.
npm is different from most package managers in that it installs modules into a folder inside of other existing modules.


10.Provide examples of user defined reusable modules implemented in Node.js
