/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left =0
   let  right =nums.length-1
    let cp = nums.slice()
   nums.sort((a, b) => a - b);
    while(left<right) {
        if(nums[left]+nums[right]>target) {
            right--

        } else if(nums[left]+nums[right]<target){
            left++
        }else if(nums[left]+nums[right]==target){
             let num1Index = cp.indexOf(nums[left]);
            let num2Index = cp.indexOf(nums[right]);
        
        if (num1Index === num2Index) {
                num2Index = cp.indexOf(nums[right], num1Index + 1);
            }
               return [num1Index, num2Index];
        }
    }

    };

