def reverse_range(min, max)
  nums = []

  i = max - 1
  while i > min
    nums << i

    i -= 1
  end

  return nums
end

print reverse_range(10, 17) # => [16, 15, 14, 13, 12, 11]
puts
print reverse_range(1, 7)   # => [6, 5, 4, 3, 2]