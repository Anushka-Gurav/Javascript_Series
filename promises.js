const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve();
    },1000);
})
promiseOne.then(function(){
    
        console.log("Promise is resolved");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve();
    },1000);
}).then(function(){
    console.log("Promise is resolved");
})



// Rejection
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve({user:"anuj", email:"anuj@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({user:"annna", pass:"shri"})
        }
        else
        {
            reject("Error: Something went wrong");
        }
    })
})

promiseFour.then((user)=>{
    console.log(user)
    return user.user;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({user:"annna", pass:"shri"})
        }
        else{
            reject("Error: Something went wrong");
        }
    },1000)
})


async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers(){
    try{
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = response.json();
            console.log(data);
    }
    catch(error){
        console.log(error);
    }
  
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
}).
.catch((error)=>{
    console.log(error);
})