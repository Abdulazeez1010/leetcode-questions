/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    // Find the maximum number in the array
    // Store a current max starting at 0
    let max = 0;
    // Loop through the array
    for (let i = 0; i < nums.length; i++){
        // If nums[i] is greater than max, update max
        max = Math.max(max, nums[i]);
    }
    // Check if the length of the array is max + 1
    if (nums.length !== max + 1) return false;
    // Check if max occurs twice in the array
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) maxCount++
    }
    if (maxCount !== 2) return false
    
    // Loop through the array again starting from max and decreasing
    // by 1 each time
    let good = false;
    // check if max - i exists in the array up to 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums.some(n => n === max - i)) {
            good = true;
        } else {
            return false;
        }
    }
    return good;
};