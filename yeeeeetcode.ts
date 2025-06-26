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
