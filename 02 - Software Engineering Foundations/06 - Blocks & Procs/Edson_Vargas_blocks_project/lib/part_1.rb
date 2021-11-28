# require "pry"
def select_even_nums(numbers)
  numbers.select {|num| num.even?}
end

def reject_puppies(dogs)
  dogs.reject { |dog| dog["age"] <= 2}
end

def count_positive_subarrays(arr)
  arr.count {|sub| sub.sum > 0}
end

def aba_translate(string)
  new_word = ""
  vowels = "aeiou"

  string.each_char do |char|
    if vowels.include?(char)
      new_word += char + "b" + char
    else
      new_word += char
    end
  end

  return new_word
end

def aba_array(words)
  words.map {|word| aba_translate(word)}
end