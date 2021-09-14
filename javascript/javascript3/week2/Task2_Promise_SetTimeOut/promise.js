// TASK 2 Promise that resolves after set time

const ownFunction = (resolveAfter) => {
  return new Promise((resolve, reject) => setTimeout(resolve, resolveAfter * 1000));
};
ownFunction(3).then(() => console.log("I am called asynchronously"));
///////////////////////////////////////////////////////////////////////////////
