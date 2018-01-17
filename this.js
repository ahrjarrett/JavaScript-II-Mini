/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

* 1. "Window" or "Global" binding is the highest level of meaning for "this".
     If a function is declared in the global scope, "this" inside the function
     refers to "window" or "global", depending on whether we're inside the
     browser or node, respectively.,

* 2. Implicit Binding refers to when a function is defined as a method on
     a parent object. In this case, "this" inside the function refers to the 
     direct parent itself (the object). When chaining methods, we can think of
     "this" as "whatever is left of the dot".

* 3. New Binding refers to the context of "this" when created by a constructor
     function. When we call `new MyObject(...args)`, "this" functions almost like a 
     variable. "this" gives us access to the instance of the constructor, and allows
     us to create a generic interface for assigning the properties and behavior of the
     instance upon instantiation (and access/call them later).

* 4. Explicit Binding refers to the technique of calling a function with `bind`,
     `call` or `apply`. All of these methods accept as a first argument the value
     we want to assign to "this", allowing us to override implicit binding in order
     to have more granular control over how "this" is bound.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const globalBinding = this
function testGlobal() {
  return globalBinding
  //if(globalBinding === this) return 'true!'

}
console.log(testGlobal())
console.log(globalBinding)

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
