"use strict";
function zipList(abc, nums) {
    console.log("==Regular==");
    let arr = [];
    const maxLength = Math.max(abc.length, nums.length);
    for (let i = 0; i < maxLength; i++) {
        if (abc[0] !== undefined) {
            arr.push(abc.shift());
        }
        if (nums[0] !== undefined) {
            arr.push(nums.shift().toString());
        }
    }
    return arr;
}
function zipListTheFunctionalWay(abc, nums) {
    console.log("==Functional==");
    const longer = abc.length > nums.length ? abc : nums;
    const maxLength = longer.length;
    return longer.reduce((arr2, _, i) => {
        if (abc[i] !== undefined) {
            arr2.push(abc[i]);
        }
        if (nums[i] !== undefined) {
            arr2.push(nums[i].toString());
        }
        return arr2;
    }, []);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log("==Regular==");
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
console.log("==Functional==");
