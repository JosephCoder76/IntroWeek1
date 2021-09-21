try {
  const letters = "abc";
  letters(); // <- Call a function that does not exsist so we would get a Type error:🤔
  //Call the 
} catch (error) {
  console.log(error, "<--- error");
}
