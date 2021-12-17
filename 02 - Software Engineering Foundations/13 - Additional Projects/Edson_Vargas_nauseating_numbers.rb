def strange_sums(numbers)
  count = 0

  numbers.each_with_index do |el_1, idx_1|
    numbers.each_with_index do |el_2, idx_2|
      if el_1 + el_2 == 0 && idx_2 > idx_1
        count += 1
      end
    end
  end

  count
end

def pair_product(numbers, product)
  numbers.each_with_index do |el_1, idx_1|
    numbers.each_with_index do |el_2, idx_2|
      if el_1 * el_2 == product && idx_2 > idx_1
        return true
      end
    end
  end

  return false
end

def rampant_repeats(string, hash)
  new_str = ""

  string.each_char do |char|
    if hash.has_key?(char)
      new_str += char * hash[char]
    else
      new_str += char
    end
  end

  new_str
end

def perfect_square?(number)
  (1...number).each do |num|
    if num * num == number
      return true
    end
  end

  return false
end

def num_factors(n)
  (1..n).count { |i| n % i == 0 }
end

def anti_prime?(number)
  amount = num_factors(number)
  (1...number).all? { |i| amount > num_factors(i) }
end

def matrix_addition(m1, m2)
  height = m1.length
  width = m1[0].length
  result = Array.new(height) { [0] * width }

  (0...height).each do |row|
    (0...width).each do |col|
      result[row][col] = m1[row][col] +m2[row][col]
    end
  end

  result
end

def factors(num)
  (1..num).select { |i| num % i == 0 }
end

def mutual_factors(*nums)
  nums
    .map { |n| factors(n) }
    .inject(:&)
end

def tribonacci_numbers(num)
  seq = [1, 1, 2]
  i = 0

  while seq.length <= num
    seq << seq[-3] + seq[-2] + seq[-1]
  end

  seq[num - 1]
end

def matrix_addition_reloaded(*matrices)
  matrix = matrices.first
  height = matrix.length
  width = matrix[0].length

  empty_matrix = array.new(height) { [0] * width }
  matrices.inject(empty_matrix) do |m1, m2|
    return nil if m2.length != height or m2[0].length != width
    matrix_addition(m1, m2)
  end
end

def squarocol?(grid)
  return true if grid.any? { |row| row.uniq.length == 1 }
  return true if grid.transpose.any? { |col| col.uniq.length == 1 }
  false
end

def squaragonal?(grid)
  
end

def adjacent_sums(arr)
  
end

def pascals_triangle(n)
  triangle = [[1]]

  while triangle.length < n
    level_above = triangle.last
    next_level = [1]
    next_level += adjacent_sums(level_above)
    next_level << 1
    triangle << next_level
  end
  triangle
end

def is_prime?(num)
  return false if num < 2
  (2...num).none? { |factor| num % factor == 0 }
end

def mersenne_prime(n)
  x = -1
  count = 0
  while count < n
    x += 1
    test = (2 ** x) - 1
    count += 1 if is_prime?(test)
  end

  (2 ** x) - 1
end

def triangular_sequence(n)
  seq = []
  i = 1

  while i <= n
    seq << (i * (i + 1)) / 2
    i += 1
  end
  seq
end

def triangular_word?(word)
  alpha = ("a".."z").to_a
  value = word
      .split("")
      .map { |char| alpha.index(char) + 1 }
      .sum
  triangular_nums = triangular_sequence(value)
  triangular_nums.include?(value)
end

def collapse(nums)
  (0...nums.length - 1).each do |i|
      if nums[i] + 1 == nums[i + 1] || nums[i] == nums[i + 1] + 1
          return nums[0...i] + nums[i + 2..-1]
      end
  end

  nums
end

def consecutive_collapse(numbers)
  numbers.each { numbers = collapse(numbers) }
  numbers
end

def pretentious_primes(arr, n)

end