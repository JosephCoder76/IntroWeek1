try {
  let person;
  //Type error again as we are trying to reference a key called name in the person object that does not exist.
  person.name;
} catch (error) {
  console.log(error);
}
