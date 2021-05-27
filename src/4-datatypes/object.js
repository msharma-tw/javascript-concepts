// #1 OBJECT LITERALS
let foo = {};
console.log(JSON.stringify(foo)); //{}

var car = {
  model: 'audi',
  color: 'red',
  price: 20000,
};
console.log(JSON.stringify(car)); //{ "model":"audi","color":"red","price":20000 }

//dynamic property
car.type = 'manual';
console.log(JSON.stringify(car)); //{ "model":"audi","color":"red","price":20000,"type":"manual" }

// #2(a) NEW OPERATOR
let o = new Object();
o.foo = 42;
console.log(o); //{ foo: 42 }

// #2(b) CONSTRUCTOR
// Step1: Create a function to define the object type
function Car(model, color) {
  this.model = model;
  this.color = color;
}
// Step2: Create instance of object using new operator
var c1 = new Car('Audi', 'red');
console.log(c1.model); //Audi

// #3 OBJECT.CREATE/PROTOTYPE
var HybridCar = Object.create(c1);
console.log(HybridCar.model); //Audi

// #3 CLASS
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
console.log(bike1.name); //Output: Hayabusa
console.log(bike2.maker); //Output: Kawasaki
