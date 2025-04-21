def targetIndices(nums: list[int], target: int) -> list[int]:
    indices = []
    nums = sorted(nums)

    for i in range(0, len(nums)):
        if nums[i] == target:
            indices.append(i)

    return indices


print(targetIndices([1, 2, 5, 2, 3], 2))
print(targetIndices([1, 2, 5, 2, 3], 3))
print(targetIndices([1, 2, 5, 2, 3], 5))
