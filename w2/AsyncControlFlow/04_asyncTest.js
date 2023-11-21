const higherOrderFunc = function (callback) {
  const data = { initials: "BG" };

  console.log("BEFORE TIMEOUT CALL");
  setTimeout(() => {
    data.initials = "YAV";
    console.log(data.initials);
    callback();
  });

  console.log("AFTER TIMEOUT CALL");
};

console.log("BEFORE MAIN CALL");
const result = higherOrderFunc(() => {
  console.log("INSIDE CALLBACK");
});

console.log("AFTER MAIN CALL");

// First output?
//BEFORE MAIN CALL
//BEFORE TIMEOUT CALL
//AFTER TIMEOUT CALL 
//AFTER MAIN CALL
//YAV
//INSIDE CALLBACK


//BEFORE MAIN CALL
//BEFORE TIMEOUT CALL
//AFTER TIMEOUT CALL 
//YAV
//INSIDE CALLBACK
//AFTER MAIN CALL
