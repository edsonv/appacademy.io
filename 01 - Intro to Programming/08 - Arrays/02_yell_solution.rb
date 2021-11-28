def yell(words)
  yelled = []

  i = 0
  while i < words.length
    word = words[i]
    yelled_word = word + "!"
    yelled << yelled_word

    i += 1
  end

  return yelled
end

print yell(["hello", "world"]) # => ["hello!", "world!"]
puts
print yell(["code", "is", "cool"]) # => ["code!", "is!", "cool!"]