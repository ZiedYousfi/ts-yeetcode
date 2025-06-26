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

// 13. Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

function romanToInt(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];
    switch (current) {
      case "I":
        if (next === "V" || next === "X") {
          result -= 1;
        } else {
          result += 1;
        }
        break;
      case "V":
        result += 5;
        break;
      case "X":
        if (next === "L" || next === "C") {
          result -= 10;
        } else {
          result += 10;
        }
        break;
      case "L":
        result += 50;
        break;
      case "C":
        if (next === "D" || next === "M") {
          result -= 100;
        } else {
          result += 100;
        }
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;
    }
  }
  return result;
}

// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Attempt #1

  // if(!list1 && !list2){
  //   return null;
  // }

  // let result: ListNode | null = new ListNode();

  // if (list1 && !list2) {
  //   result.val = list1.val;
  //   return result;
  // }

  // if (list2 && !list1) {
  //   result.val = list2.val;
  //   return result;
  // }

  // if(!list1 || !list2){
  //   return null;
  // }

  // let next: ListNode | null = new ListNode();

  // result.next = next;

  // if (list1?.val < list2?.val) {
  //   result.val = list1?.val;
  //   next.val = list2?.val;
  // } else if (list1.val === list2.val) {
  //   result.val = list1.val;
  //   next.val = list2.val;
  // } else {
  //   result.val = list2?.val;
  //   next.val = list1?.val;
  // }

  // next.next = mergeTwoLists(list1.next, list2.next);

  // // sort the result list
  // let current: ListNode | null = result;
  // let sorted: ListNode | null = null;

  // while (current) {
  //   let next = current.next;
  //   if (next) {
  //     if (next.val > current.val) {
  //     const temp = current.val;
  //     current.val = next.val;
  //     next.val = temp;
  //     }
  //   }
  //   current = next;
  // }

  // return result;

  // Attempt #2

  if (!list1 && !list2) {
    return null;
  }

  interface ListToArray {
    (list: ListNode | null): number[];
  }

  const list1_as_array: ListToArray = (list1: ListNode | null): number[] => {
    let array: number[] = [];
    let current: ListNode | null = list1;
    let next: ListNode | null = list1 ? list1.next : null;
    while (current) {
      if (current !== null && current.val !== undefined) {
        array.push(current.val);
      }
      current = next;
      next =  next ? next.next : null;
    }
    return array;
  }

  const list2_as_array: ListToArray = (list2: ListNode | null): number[] => {
    let array: number[] = [];
    let current: ListNode | null = list2;
    let next: ListNode | null = list2 ? list2.next : null;
    while (current) {
      if (current !== null && current.val !== undefined) {
        array.push(current.val);
      }
      current = next;

      next =  next ? next.next : null;
    }
    return array;
  }

  const final_array = list1_as_array(list1).concat(list2_as_array(list2));
  final_array.sort((n1,n2) => n1 - n2);

  if (final_array.length === 0) {
    return null;
  }

  let result: ListNode | null = new ListNode;
  let current = result;

  for (const val of final_array) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return result.next;
}
