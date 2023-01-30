export class Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public lifestate: boolean
  ) {
    this.lifestate = true;
    this.name = name;
    this.age = age;
    this.family = family;
  }
  greetings() => {
    console.log(`Hola soy ${this.name} y tengo ${this.age}`); // Cambiar de clg a "asignar string"
  }
  kill() {
    this.lifestate = false;
  }
}

class King extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public lifestate: boolean,
    public reigningAge: number
  ) {
    super(name, family, age, lifestate);
  }
  super.greetings() {
    console.log("Vais a morir todos")
  }
}

class Fighter extends Character {
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public lifestate: boolean,
    public reigningAge: number
  )
}
