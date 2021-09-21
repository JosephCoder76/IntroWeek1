try {
  let person;
  //Type error as person is not an object data type, so we camt set the properties of the objects name key
  person.name = "Alex";
} catch (error) {
  console.log(error);
}
