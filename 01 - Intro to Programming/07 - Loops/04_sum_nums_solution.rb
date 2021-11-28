def sum_nums(max)
  sum = 0

  i = 1
  while i <= max
    sum += i

    i += 1
  end

  return sum
end

puts sum_nums(4) # => 10
puts sum_nums(5) # => 15