try {
  //reference error as we read from top to bottom and the person variable is not defined until later so initially when it is referenced its out of scope.
  person;
  let person = "Foluso";
} catch (error) {
  console.log(error);
}
