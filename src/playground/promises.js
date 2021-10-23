const promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('This is my resolved data')}, 1500)    
}).then((data) => {
    console.log(data)
})


const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {reject('Error:')}, 2500)
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error, "You broke it. Twit.")
})