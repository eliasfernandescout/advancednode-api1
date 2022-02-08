import '../config/module-alias'
class Person {
  speak (name?: string): string {
    return `Olá ${name?.toUpperCase() ?? 'Fulano'}!!!`
  }
}

const p = new Person()
p.speak('Dante Mattos')
p.speak()
