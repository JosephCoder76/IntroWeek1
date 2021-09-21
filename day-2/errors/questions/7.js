try {
  const name = "jonny";
  //Type error as our name variable is a string data type and not declared as an array so we cant use the push method to puse the apple string in to the end
  //of the array
  name.push("apple");
} catch (error) {
  console.log(error);
}
