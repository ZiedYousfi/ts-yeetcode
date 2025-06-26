// 9. Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x: number): boolean {
  if (x < 10 && x >= 0) {
    return true;
  }
  if (x <= 0) {
    return false;
  }
  const number_as_string: string = x.toString();

  console.log(number_as_string.slice(0, number_as_string.length / 2));
  console.log(
    number_as_string.slice(
      number_as_string.length / 2 + 1,
      number_as_string.length
    )
  );

  if (number_as_string.length % 2 === 0) {
    if (
      number_as_string.slice(0, number_as_string.length / 2) ===
      number_as_string
        .slice(number_as_string.length / 2, number_as_string.length)
        .split("")
        .reverse()
        .join("")
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (
    number_as_string.slice(0, number_as_string.length / 2) ===
    number_as_string
      .slice(number_as_string.length / 2 + 1, number_as_string.length)
      .split("")
      .reverse()
      .join("")
  ) {
    return true;
  } else {
    return false;
  }
}

// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  const countMap = new Map<number, number>();

  nums.forEach((num, index) => {
    countMap.set(num, index);
  });

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const e = countMap.get(target - num);

    if (e !== undefined) {
      if (e !== index) {
        result.push(index, e);
        break;
      }
    }
  }

  return result;
}
