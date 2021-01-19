//scope es6 and acmascript 2015
//global scope
var name="Test";
console.log(name); //global
function getName(){
  var age="18"; //local scope
  console.log(name);
  console.log(age);
}
getName();

//local scope not mutual
