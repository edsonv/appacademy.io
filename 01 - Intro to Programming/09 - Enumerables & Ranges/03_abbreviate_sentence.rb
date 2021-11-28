# Abbreviate Sentence

# Write a method abbreviate_sentence that takes in a sentence string and returns a new sentence where every word longer than 4 characters has all of it's vowels removed.

def abbreviate_sentence(sent)
  abb_sent_arr = []
  abb_sent = ""
  words = sent.split(" ")
  words.each do
    |word|
    if word.length > 4
      abb_sent_arr << abb_word(word)
    else
      abb_sent_arr << word
    end
  end
  
  abb_sent = abb_sent_arr.join(" ")
  
  return abb_sent

end

def abb_word(word)
  vowels = "aeiou"
  abb_word = ""
  
  word.each_char do
    |char|
    if !vowels.include?(char)
      abb_word += char
    end
  end
  
  return abb_word
end

puts abbreviate_sentence("follow the yellow brick road") # => "fllw the yllw brck road"
puts abbreviate_sentence("what a wonderful life")        # => "what a wndrfl life"