// to test these problems you can run 'node classes.js' in your terminal

// problem #1
// convert the Animal constructor function from 'constructors.js' into an ES6 class
class Animal {
  constructor({ name }) {
    this.name = name
  }
  grow() {
    return `${this.name} grew larger!`
  }
}

const grizz = new Animal({ name: 'Grizzly' })
console.log(grizz.grow())

// problem #2
// convert the Cat constructor function from 'constructors.js' into an ES6 class
class Cat extends Animal {
  constructor({ name }) {
    super({ name })
  }
}

const guido = new Cat({ name: 'Guido' })
console.log(guido.grow())

// if everything is setup properly the code below will print 'Foofie grew larger!'
// uncomment the code below to test your solution

const foofie = new Cat({
  name: 'foofie',
})

console.log(foofie.grow())

