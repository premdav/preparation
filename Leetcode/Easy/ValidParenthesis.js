/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const valueMap = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  const remaining = [];
  for (let i = 0; i < s.length; i += 1) {
      if (remaining.length > 0 && valueMap[remaining[remaining.length - 1]] === s[i]) remaining.pop();
      else remaining.push(s[i]);
  }
  return remaining.length === 0;
};

// Runtime: 76 ms, faster than 81.27% of JavaScript online submissions for Valid Parentheses
// Memory Usage; 42.5 MB, less than 56.38% of submissions
