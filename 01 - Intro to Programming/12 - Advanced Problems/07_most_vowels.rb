# Most Vowels

# Write a method most_vowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.

def most_vowels(sentence)
  counts = {}
  sentence.split.each do |word|
    counts[word] = vowel_count(word)
  end
  sorted = counts.sort_by {|k,v| v}
  return sorted[-1][0]
end

def vowel_count(word)
  vowels = "aeiou"
  count = 0
  word.each_char do |char|
    if vowels.include?(char)
      count += 1
    end
  end
  return count
end

print most_vowels("what a wonderful life") #=> "wonderful"