function colTotal(vipFlag){
  var amount=0;
  if(vipFlag){
    var amount=1
  }
  {
    var amount=100; //if we use let and not var output is 1
    {
      var amount=1000;
    }
  }

  return amount;
}
console.log(colTotal(true));
