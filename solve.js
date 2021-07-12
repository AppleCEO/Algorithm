// https://learnjs.vlpt.us/basics/08-loop.html
function biggerThanThree(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 3) {
            result.push(numbers[i]);
        }
    }
    return result;
}
  
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]