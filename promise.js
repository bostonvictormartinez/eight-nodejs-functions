var mathDemo= new Promise((resolve, reject)=>{
  console.log(Math.random())
  if(Math.random()*100<90){
    console.log('promise resolve');
    resolve('200 OK');
  }
  reject(new Error('Error occurred')); //or reject('Error') for console logoutput
});

var onResolved=(rValue)=>{
  console.log(rValue);
}

var onReject=(error)=>{
  console.log(error);
}

mathDemo.then(onResolved, onReject);
