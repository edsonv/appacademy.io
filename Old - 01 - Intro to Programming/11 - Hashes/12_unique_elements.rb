# Unique Elements

# Write a method unique_elements that takes in an array and returns a new array where all duplicate elements are removed. Solve this using a hash.

# Hint: all keys of a hash are automatically unique

def unique_elements(arr)
  new_arr = []
  arr.each do |ele|
    if !new_arr.include?(ele)
      new_arr << ele
    end
  end
  return new_arr
end

print unique_elements(['b', 'c', 'a', 'a', 'b', 'c']) #=> ["a", "b", "c"]
puts