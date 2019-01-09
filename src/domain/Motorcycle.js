import {Vehicle} from './Vehicle';

class Motorcycle extends Vehicle {
    constructor(model, year) {
      super(model, year);
    }
  
    toString() {
      return `Motorcycle ${this.model} ${this.year}`;
    }
  }

  export {Motorcycle};