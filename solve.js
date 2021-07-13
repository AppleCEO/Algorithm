// https://learnjs.vlpt.us/basics/09-array-functions.html
function countBiggerThanTen(numbers) {
    return numbers.filter(number => number > 10).length;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5