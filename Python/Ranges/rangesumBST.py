def rangeSumBST(root, low, high):
    lst = []

    for i in range(len(root)):
        if root[i]:
            if (root[i] >= low) and (root[i] <= high):
                lst.append(root[i])

    return sum(lst)


print(rangeSumBST([10, 5, 15, 3, 7, None, 18], 7, 15))
print(rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, None, 6], 6, 10))
