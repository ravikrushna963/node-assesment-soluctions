var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('FULFILLED!')
    }, 300);
  });
  
  promise.then((r) => {
    console.log(r)
  });