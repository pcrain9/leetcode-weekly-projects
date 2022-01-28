/*week 1, problem 1 from https://techinterviewhandbook.org/best-practice-questions/ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        let solution = [i, j];
        return solution;
      }
    }
  }
};
