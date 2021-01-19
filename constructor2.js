


//vehicle.displayType();




//next///cant get working

class Base{
  constructor(options={}, data=[]){
    this.name="bass";
    this.url="http.ibm.com";
    this.data=data;
    this.options=options;
  }
}
class Derived extends Base{
  contructor (options ={}, data=[]){
    super(options, data);
    this.age=100;
    this.country="US";
  }
}

let baseObj = new Base();
let derivedObj= new Derived({private:true}, ['1', '2', '3']);

console.log(baseObj);
console.log(derivedObj);
