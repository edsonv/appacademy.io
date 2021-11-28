def palindrome?(string)
  new_string = ""
  i = string.length - 1
  while i >= 0
    new_string += string[i]
    i -= 1
  end
  string == new_string
end

def substrings(string)
  subs = []

  (0...string.length).each do |start_idx|
    (start_idx...string.length).each do |end_idx|
      subs << string[start_idx..end_idx]
    end
  end

  subs
end

def palindrome_substrings(string)
  substrings(string).select {|sub| palindrome?(sub) && sub.length > 1}
end