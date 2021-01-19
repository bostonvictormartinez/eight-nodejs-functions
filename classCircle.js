class Circle{
  constructor(radius){
    this._radius=radius;
  }
  get area() { return Math.PI * this._radius * this._radius}
  set radius (r) {this._radius=r}
}
var c= new Circle(4)
c.radius=6
console.log(c.area);
