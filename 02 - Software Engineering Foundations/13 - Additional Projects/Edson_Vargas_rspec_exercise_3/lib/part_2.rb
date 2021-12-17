def element_count(arr)
  hash = Hash.new(0)

  arr.each { |ele| hash[ele] += 1}
  hash
end

def char_replace!(string, hash)
  string.each_char.with_index do |char, i|
    if hash.include?(char)
      string[i] = hash[char]
    end
  end
  string
end

def product_inject(numbers)
  numbers.inject { |acc, curr|  acc * curr}
end