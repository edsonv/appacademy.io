def mergeTwoLists(list1, list2):
    return sorted([n for n in list1] + [m for m in list2])


list1 = [1, 2, 4]
list2 = [1, 3, 4]
print(mergeTwoLists(list1, list2))  # [1,1,2,3,4,4]

list1 = []
list2 = []
print(mergeTwoLists(list1, list2))  # []

list1 = []
list2 = [0]
print(mergeTwoLists(list1, list2))  # [0]
