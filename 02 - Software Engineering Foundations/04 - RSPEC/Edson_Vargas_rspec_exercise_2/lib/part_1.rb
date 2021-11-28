def partition(array, num)
  less = []
  greater = []

  array.each do |ele|
    if ele < num
      less << ele
    else
      greater << ele
    end
  end

  [less, greater]
end

def merge(hash_1, hash_2)
  merged = Hash.new

  hash_1.each { |k, v| merged[k] = v}
  hash_2.each { |k, v| merged[k] = v}

  merged
end

def censor(sentence, cursed_words)
  new_words = sentence.split(" ").map do |word|
    if cursed_words.include?(word.downcase)
      star_vowels(word)
    else
      word
    end
  end

  new_words.join(" ")  
end

def star_vowels(word)
  vowels = "aeiouAEIOU"
  new_word = ""

  word.each_char do |char|
    if vowels.include?(char)
      new_word += "*"
    else
      new_word += char
    end
  end

  new_word
end

def power_of_two?(num)
  product = 1

  while product < num
    product *= 2
  end
  
  product == num
end