//class
class Singleton {
  static instance: Singleton
  name: string
  constructor(name: string) {
    this.name = name
    if (Singleton.instance) {
      return Singleton.instance
    }
    Singleton.instance = this
  }

  getName() {
    console.log(this.name)
  }
}
const inst1 = new Singleton('inst1')
const inst2 = new Singleton('inst2')
inst1.getName()
inst2.getName()

// function

const fnModule = (() => {
  let instance: {name: string}

  const createInstance = (name: string) => {
    if (instance) {
      return console.log(instance.name)
    }
    instance = {name}
    return console.log(instance.name)
  }
  return createInstance
})()

fnModule('inst1')
fnModule('inst2')

console.log('test')
