const { check, runTest, skipTest } = require("../../../test-api");

// Once you have passed the current test, change skipTest on the following test to runTest so you are able to run it with Node

runTest("Exercise 0", function () {
  function testCat(str) {
    return /cat/.test(str);
  }

  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match a string containing the characters cat

  check(testCat).whenCalledWith("cat").returns(true);
  check(testCat).whenCalledWith("asdcatas").returns(true);
  check(testCat).whenCalledWith("cat11234").returns(true);
  check(testCat).whenCalledWith("asdcat!").returns(true);
  check(testCat).whenCalledWith("36237cat").returns(true);

  check(testCat).whenCalledWith("ca123").returns(false);
  check(testCat).whenCalledWith("atasdads").returns(false);
  check(testCat).whenCalledWith("caasdlkj").returns(false);
  check(testCat).whenCalledWith("12123ca234").returns(false);
});

runTest("Exercise 1", function () {
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match a string containing at least 5 of the digits from 1 to 9 only

  function testAtLeast5Digits(str) {
    //return true if we find 5 characters beteen the reg exp of 1-9 {} denotes a quantifier
    return /[1-9]{5}/.test(str);
  }

  check(testAtLeast5Digits).whenCalledWith("12345").returns(true);
  check(testAtLeast5Digits).whenCalledWith("56783").returns(true);
  check(testAtLeast5Digits).whenCalledWith("98764").returns(true);
  check(testAtLeast5Digits).whenCalledWith("13837").returns(true);
  check(testAtLeast5Digits).whenCalledWith("45613837").returns(true);
  check(testAtLeast5Digits).whenCalledWith("abc13837def").returns(true);
  check(testAtLeast5Digits).whenCalledWith("00abcg77777").returns(true);
  check(testAtLeast5Digits).whenCalledWith("13837!f").returns(true);

  check(testAtLeast5Digits).whenCalledWith("123").returns(false);
  check(testAtLeast5Digits).whenCalledWith("12308").returns(false);
  check(testAtLeast5Digits).whenCalledWith("1234").returns(false);
  check(testAtLeast5Digits).whenCalledWith("addc6826asd").returns(false);
});

runTest("Exercise 2", function () {
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match one or more ! at the **beginning of a string**
  // You should look up regex anchors for this exercise !

  function testStartsWithExclaimMarks(str) {
    return /^!/.test(str); //^ anchor for the start of the pattern to match
  }

  check(testStartsWithExclaimMarks).whenCalledWith("!!!sdlasjdlajsd").returns(true);
  check(testStartsWithExclaimMarks).whenCalledWith("!!askjaa").returns(true);
  check(testStartsWithExclaimMarks).whenCalledWith("!!!!!adjaksljd").returns(true);
  check(testStartsWithExclaimMarks).whenCalledWith("!!!32749anks").returns(true);
  check(testStartsWithExclaimMarks).whenCalledWith("!abc").returns(true);

  check(testStartsWithExclaimMarks).whenCalledWith("adssdk!!!").returns(false);
  check(testStartsWithExclaimMarks).whenCalledWith("asdk;alk!!!!").returns(false);
  check(testStartsWithExclaimMarks).whenCalledWith("errui!!!!").returns(false);
  check(testStartsWithExclaimMarks).whenCalledWith("cjljad!!!!!!").returns(false);
});

runTest("Exercise 3", function () {
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match exactly 6 of a, b or c
  // You should look up regex anchors for this exercise !

  function testExact6ABCs(str) {
    //[] everything is a one letter occurance, return a b or c first occurance,
    //{} number looking for 6 characters between a and c
    //^ $ 6 abc at the beginning and end, if you find 6 occurances of a b or then 
    //return true else return false
    return /^[abc]{6}$/.test(str);
  }

  check(testExact6ABCs).whenCalledWith("abcabc").returns(true);
  check(testExact6ABCs).whenCalledWith("cbabac").returns(true);
  check(testExact6ABCs).whenCalledWith("cacaca").returns(true);
  check(testExact6ABCs).whenCalledWith("bbbcca").returns(true);

  check(testExact6ABCs).whenCalledWith("xyzxyz").returns(false);
  check(testExact6ABCs).whenCalledWith("pqrsqp").returns(false);
  check(testExact6ABCs).whenCalledWith("pprrss").returns(false);
  check(testExact6ABCs).whenCalledWith("vsxprh").returns(false);
  check(testExact6ABCs).whenCalledWith("abcabca").returns(false);
  check(testExact6ABCs).whenCalledWith("abca").returns(false);
});

runTest("Exercise 4", function () {
  // Replace YOUR_REGEX_HERE with a regular expression

  // Your pattern should match any string containing *exactly* 2 consecutive letter l's
  // n.b. exactly 2 means that 3 or more consecutive l's are not allowed.

  function testExact2ConsecutiveLs(str) {
    //Starts athe beginning with ^ anchor find a string that starts with mystery number of chars
    //that arent an l [^l], then then epext 2 ll sequentially, then look for any number of 
    //chars that are not l
    //From left to right, ignore l, accept 2 lls, ignore any ls after 2
    return /^[^l]*ll[^l]*$/.test(str);
  }

  check(testExact2ConsecutiveLs).whenCalledWith("hello").returns(true);
  check(testExact2ConsecutiveLs).whenCalledWith("bells").returns(true);
  check(testExact2ConsecutiveLs).whenCalledWith("bellows").returns(true);
  check(testExact2ConsecutiveLs).whenCalledWith("aaaallasdows").returns(true);

  check(testExact2ConsecutiveLs).whenCalledWith("mile").returns(false);
  check(testExact2ConsecutiveLs).whenCalledWith("fly").returns(false);
  check(testExact2ConsecutiveLs).whenCalledWith("wellll").returns(false);
  check(testExact2ConsecutiveLs).whenCalledWith("mitchelllloyd").returns(false);
});

var YOUR_REGEX_HERE;
