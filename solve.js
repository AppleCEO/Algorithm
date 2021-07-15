// https://learnjs.vlpt.us/useful/07-spread-and-rest.html
function max(...numbers) {
  let max = 0;
  numbers.forEach(number => {
    if (number > max) {
      max = number;
    }
  })

  return max;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);