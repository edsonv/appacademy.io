# Reverse

# Write a method reverse(word) that takes in a string word and returns the word with its letters in reverse order.

def reverse(word)
  reverse = ""
  i = 0
  while i < word.length
    i += 1
    char = word[-i]
    reverse += char
  end
  return reverse

end

puts reverse("cat")          # => "tac"
puts reverse("programming")  # => "gnimmargorp"
puts reverse("bootcamp")     # => "pmactoob"