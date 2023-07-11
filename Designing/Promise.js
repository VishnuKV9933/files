// const promise1 = new Promise((resolve) =>
//  setTimeout(()=>{
//      resolve("hai")
//  },1000)
// );
// function call(data){
  
//   return new Promise((resolve) =>
//   setTimeout(()=>{
//     resolve("hai all")
// },1000)
//   );
// }



// promise1.then((data)=>{
//   console.log(data);
//  return call(data)
// })
// .then((data)=>{console.log(data);})

// Promise.race([promise1,promise2])
//   .then((result) => {
//     console.log(result); // Output: 'Promise 2'
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// ---------------------------------------------------------
// const existingPromise = new Promise((resolve) => {
//   setTimeout(() => {
    
//     resolve('Existing Promise');
//   }, 2000);
// });

// const resolvedPromise = Promise.resolve("existingPromise");

// // console.log(resolvedPromise === existingPromise); // Output: true
// resolvedPromise.then((data)=>{
//   console.log(data);
// })

// const promise1 = Promise.resolve('Promise 1');
// const promise3 = new Promise((resolve,reject) =>
//   setTimeout( ()=>{
    
//     reject("rejected")
//   },3000) 
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, 'Promise 2')
// );
// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results); // Output: ['Promise 1', 'Promise 2', 'Promise 3']
//   })
//   .catch((error) => {
//     console.error("error");
//   });
// Parent object

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise 1 resolved");
//   }, 2000);
// });

// const promise2 = new Promise((reject) => {
//   setTimeout(() => {
//     reject('Promise 2 resolved');
//   }, 2000);
// });

// const promise3 = Promise.reject("reject3")

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result); // Output: 'Promise 2 resolved'
//   })
//   .catch((error) => {
//     console.error(error); // Output: Error: AggregateError: All promises were rejected
//   });
