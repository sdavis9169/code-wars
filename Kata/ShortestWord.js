// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

let s = "The tall man hopped over the small bush to";

function findShort(s) {
  let newArr = s.split(" ");
  console.log(newArr);
  let min = Math.min(...newArr.map(({ length }) => length));
  return min;
}

findShort(s);

// Test.describe("Example tests",_=>{
//     Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
//     });
