class Vehicle{
  displayType(){
    console.log('Car');
  }
}


let vehicle=new Vehicle();
console.log(typeof Vehicle);

console.log(vehicle instanceof Vehicle);
vehicle.displayType();
