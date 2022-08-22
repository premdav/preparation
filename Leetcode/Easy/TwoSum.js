/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) return [i, j];
      }
  }
};

// runtime: 122 ms, faster than 53.34% of JavaScript online submissions for Two Sum
// Memory Usage: 42.3 MB, less than 75.91% of JavaScript online submissions for Two Sum
