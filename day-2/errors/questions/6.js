try {
  //variable is already declared just using let for local scope rather than var for global scope, so we should get a syntax error 
  let person = "Foluso";
  var person = "Alex";
} catch (error) {
  console.log(error);
}
