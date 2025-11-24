let nums = [[3, 6, 8], [5, 9, 2], [4, 7, 10]];
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        if (+nums[i][j] % 2 == 0) {
            console.log(nums[i][j]);
        }
    }
}