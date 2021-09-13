// TASK 3 Rewrite time

/*Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
 The getCurrentPosition function is probably going to throw an error, but that is fine.
 As long as you can use it as a promise. */

const setTimeoutPromise = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(
        JSON.stringify({
          latitude: position.coords.latitude,
          longtitude: position.coords.longitude,
        }),
      );
      reject(new Error("There was a misterious error"));
    });
  });
};

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

