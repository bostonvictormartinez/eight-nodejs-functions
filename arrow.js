var car={
  model:'fiesta',
  manufacturer:'ford',
  getFullName: function(){
    return this.manufacturer+ '' +this.model;
  }
}
console.log(car.getFullName());


var car={
  model:'fiesta',
  manufacturer:'ford',
  getFullName: ()=>{
    return `This ${this.manufacturer}${this.model}`;
  },
  getCarName:(year)=>{
    return `Car model is ${this.model} ${this.manufacturer} ${year}`;
  }
}//console.log here returns error console log must be on seperate line


Object.assign(this, car);


console.log(car.getFullName());
console.log(car.getCarName('1994'));

//consolelog must be on line 18 if is was line 17 example } console.log(car.getFullName()) = error must be seperate line
