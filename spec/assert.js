var assert = {
  isTrue: function(eventToCheck){
    if (!eventToCheck) {
      throw new Error("No: " + eventToCheck + " is WRONG!");
    }
    console.log('The test passed!!! No one saw that coming.')
  }
};
