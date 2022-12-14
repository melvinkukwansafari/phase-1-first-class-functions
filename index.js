setTimeout (function(){ myFunction("I love You !!!");
    beforeEachFunction()

})

function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    function myNamedFunction() {
      // do something here
    }
  
    return myNamedFunction;
  }
  function returnsAnAnonymousFunction() {
    return function() {
      // code for anonymous function goes here
    };
  }
  
 
  