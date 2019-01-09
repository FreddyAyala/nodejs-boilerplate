class Vehicle {
    constructor(model, year) {
      this._model = model;
      this._year = year;
    }
  
    get model() {
      return this._model;
    }
  
    get year() {
      return this._year;
    }
  
    toString() {
      return `${this.make} ${this.year}`;
    }
  }

  export {Vehicle}


  
  /*var vehicle = new Vehicle('Toyota Corolla', 2009);
  
  console.log(vehicle.make); // Toyota Corolla
  vehicle.make = 'Ford Mustang';
  console.log(vehicle.toString()) // Toyota Corolla 2009*/