const prototype = {
  init: function(sound) {
    this.sound = sound
    return this
  },
  makeSound: function() {
    console.log(this.sound)
  }
}

const mark = Object.create(prototype).init('meow')
mark.makeSound()

const donut = Object.create(prototype).init('hello')
donut.makeSound()