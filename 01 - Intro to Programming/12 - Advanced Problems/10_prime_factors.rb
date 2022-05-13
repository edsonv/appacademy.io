# Prime Factors

# Write a method prime_factors that takes in a number and returns an array containing all of the prime factors of the given number.

def prime_factors(num)
  factors = []
  (1...num).each do |i|
    if num % i == 0 && prime?(i)
      factors << i
    end
  end
  
  return factors
      
end

def prime?(n)
  if n < 2
    return false
  end
  
  (2...n).each do |factor|
    if n % factor == 0
      return false
    end
  end
  
  return true
end

print prime_factors(24) #=> [2, 3]
puts
print prime_factors(60) #=> [2, 3, 5]
puts