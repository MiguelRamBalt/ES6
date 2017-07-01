/*
  Refactor the following function to use the rest operator.
  Remember, an argument using the rest operator does *not* need to be called 'rest'.
*/
function product(...numbers) {
    return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

/*
  Refactor the following to use the spread operator.
  function join(array1, array2) {
  return array1.concat(array2);
}
*/
function join(array1, array2) {
  return [...array1, ...array2];
}

/*
  Refactor the following to use the only the rest operator
  function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/

function unshift(array, ...array2) {
  return [...array2 , ...array];
}
