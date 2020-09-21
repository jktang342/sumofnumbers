let testNumbers = [1, 2, 3, 4];

function sumFor(numbers) {
  let total = 0;
  for (const nums of numbers) {
    total += nums;
  }
  return total;
}

function sumWhile(numbers) {
  let total = 0;
  let count = 0;
  while (count < numbers.length) {
    total += numbers[count];
    count++;
  }
  return total;
}

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));   //Assistance from E26 demonstration video
  }
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function(memo, num) { return memo + num; }, 0);
}

console.log(sumFor(testNumbers));
console.log(sumWhile(testNumbers));
console.log(sumRecursion(testNumbers));
console.log(sumTheSimpleWay(testNumbers));

//Attempt 1: 28:04
//Attempt 2: 27:32
//Attempt 3: 27:21
//Attempt 4: 27:09
//Attempt 5: 26:47
//Attempt 6: 26:31
