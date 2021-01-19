let someVar=class Vehicle{
  constructor(){ //automatically
    console.log('Running auto')
  }
  displayType(){
    console.log('Car');
  }
}

let vehicle=new someVar(); //new creates new object

vehicle.displayType();

///example two
class Vehicle{
  constructor(color){
    console.log(`The car ${color}`);
  }
}
class Tesla extends Vehicle {}
let model = new Tesla ('blue');
