// TASK 2 Promise that resolves after set time

const ownFunction = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000));
ownFunction(3).then(() => console.log("I am called asynchronously"));

///////////////////////////////////////////////////////////////////////////////
