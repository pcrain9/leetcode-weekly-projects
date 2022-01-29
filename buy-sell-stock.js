/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //declare a greatest profit variable
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      //if i > j, break inner loop and increment i
      if (prices[i] > prices[j]) {
        break;
      }
      //if i<j, subtract i from j and check if the difference is greater than current profit value
      if (prices[i] < prices[j]) {
        if (prices[j] - prices[i] > profit) {
          profit = prices[j] - prices[i];
        }
      }
    }
  }
  return profit;
};
