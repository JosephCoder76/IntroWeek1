const { runTest, skipTest, check } = require("../../../test-api");
//Checking typeof and returns object as an object type
runTest("Task 1", function () {
  const myObject = {};

  check("object").isEqualTo(typeof myObject);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 2", function () {
  const father = {
    firstName: "Michael",
    lastName: "Bluth",
    age: 33,
  };

  check("Michael").isEqualTo(father.firstName);
  check("Bluth").isEqualTo(father.lastName);
  check().isEqualTo(father.firstname);
  check(33).isEqualTo(father.age);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 3", function () {
  const son = {};
  son.name = "George Michael";
  son.lastname = "Bluth";
  son.age = 16;
  son.jobs = ["Frozen Banana Salesman", "CEO of Fakeblock"];

  check("George Michael").isEqualTo(son.name);
  check("object").isEqualTo(typeof son.jobs);
  //Second array element 5th element position
  check("f").isEqualTo(son.jobs[1][5]);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 4", function () {
  const starWars = {
    episode4: "A New Hope",
    episode5: "Empire Strikes Back",
    episode6: "Return of the Jedi",
    episode7: "The Force Awakens",
  };
  //key reference is created by the returned value of the key name "episode" concatenated with
  //the result of 10 -4 thus episode 6
  const worstOne = starWars["episode" + (10 - 4)];

  check("Return of the Jedi").isEqualTo(worstOne);
  check(starWars["episode7"]).isEqualTo("The Force Awakens");
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 5", function () {
  const brotherInLaw = {
    name: "Tobias",
    lastname: "Funke",
    job: "therapist",
  };

  check("therapist").isEqualTo(brotherInLaw.job);
  brotherInLaw.job = "actor";
  check("actor").isEqualTo(brotherInLaw.job);

  delete brotherInLaw.job;
  check().isEqualTo(brotherInLaw.job);
});

// once you have passed the test above, change skipTest below to runTest so you are able to run the next test
runTest("Task 6", function () {
  const bluthFamily = {
    father: {
      name: "George",
    },
    mother: {
      name: "Lucille",
    },
    sons: [{ name: "GOB" }, { name: "Michael" }, { name: "Buster" }],
    daughters: [{ name: "Lindsay" }],
  };

  check("George").isEqualTo(bluthFamily.father.name);
  check(bluthFamily.mother.name).isEqualTo("Lucille");
  //Here we are accessing the daugthers key and then the first element of the array, and 
  //explicitly calling the name key. Here we have an object nested inside an array
  check(bluthFamily.daughters[0].name).isEqualTo("Lindsay");
});

var FILL_ME_IN;
