def twoSum(nums, target):
    nums_hash = {}

    for i, num in enumerate(nums):
        complement = target - num
        if complement in nums_hash:
            return [nums_hash[complement], i]

        nums_hash[num] = i


nums = [2, 7, 11, 15]
target = 9
print(twoSum(nums, target))

nums = [3, 2, 4]
target = 6
print(twoSum(nums, target))

nums = [3, 3]
target = 6
print(twoSum(nums, target))
