/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let rigt_to_left = [1, ];
    let left_to_right = [1, ];
    let [acumLeft, acumRight] = [1, 1];
    for (let i = 1; i < nums.length; i++) {
        acumLeft *= nums[i-1];
        acumRight *= nums[nums.length - i];
        left_to_right.push(acumLeft);
        rigt_to_left.push(acumRight);
    }
    nums = []
    for (let i = 0; i < left_to_right.length; i++) {
        nums.push(left_to_right[i] * rigt_to_left[rigt_to_left.length - 1 - i]);
    }
    return nums;
};
