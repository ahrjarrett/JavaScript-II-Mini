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
// In the REPL:
this === global // => true
function testContext() { return this }
testContext() === global // => true
/* However, "this" has a different meaning from
 * inside a node file, because "this" refers to
 * `module.exports`, which right now is an empty object: */

function testFileContext() { return this }
console.log(this === module.exports)       // => true
console.log(testFileContext() === global)  // => true


// Principle 2
// code example for Implicit Binding
const newObject = {
  someProp: 'someValue',
  someMethod: function() { return this }
}

console.log(
  newObject.someMethod()
) // => { someProp: 'someValue', someMethod: [Function: someMethod] }


// Principle 3
// code example for New Binding
function Dog(attrs) {
  this.name = attrs.name
  this.whoAmI = function() { return this }
}
const grizzly = new Dog({ name: 'Grizzly' })
console.log(grizzly.name) // => Grizzly
console.log(grizzly.whoAmI()) // => Dog { name: 'Grizzly', whoAmI: [Function] }


// Principle 4
// code example for Explicit Binding
class SomeReactComponent extends React.component {
  // Obviously this code doesn't run, because it includes JSX and possibly
  // new ES6/7 features that your version of Node might not be able to handle
  // without Babel!
  constructor(props) {
    super(props)
    // use bind to make sure we have access to the method, no matter where we call
    // it from inside this class
    this.handleSomeDomEvent = this.handleSomeDomEvent.bind(this)
  }

  someFormMethodImGonnaUse(e) {
    if(somePredicate) this.handleSomeDomEvent(e.target.value)
  }

  render() {
    return (
	<div>
	    <form onSubmit={this.handleSomeDomEvent(e)} />
	</div>
    )
  }
}

