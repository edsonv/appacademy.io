def is_prime?(num)
  (2...num).each do |factor|
    return false if num % factor == 0
  end

  num > 1
end

def nth_prime(n)
  count = 0
  num = 1
  while count < n
    num += 1
    count +=1 if is_prime?(num)
  end

  return num
end

def prime_range(min, max)
  (min..max).select { |num| is_prime?(num)}
end