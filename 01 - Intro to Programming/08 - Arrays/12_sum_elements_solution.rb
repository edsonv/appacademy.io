def sum_elements(arr1, arr2)
  new_elements = []

  i = 0
  while i < arr1.length
    new_ele = arr1[i] + arr2[i]
    new_elements << new_ele

    i += 1
  end

  return new_elements
end

print sum_elements([7, 4, 4], [3, 2, 11])                            # => [10, 6, 15]
puts
print sum_elements(["cat", "pizza", "boot"], ["dog", "pie", "camp"]) # => ["catdog", "pizzapie", "bootcamp"]