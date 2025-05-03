# Caesar Cipher

# Write a method caesar_cipher that takes in a string and a number. The method should return a new string where every character of the original is shifted num characters in the alphabet.

# Feel free to use this variable:
# alphabet = "abcdefghijklmnopqrstuvwxyz"

def caesar_cipher(str, num)
  new_str = ""
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  str.each_char do |char|
    old_index = alphabet.index(char)
    new_index = old_index + num
    new_char = alphabet[new_index % 26]
    new_str += new_char
  end
  	
  return new_str
end

puts caesar_cipher("apple", 1)    #=> "bqqmf"
puts caesar_cipher("bootcamp", 2) #=> "dqqvecor"
puts caesar_cipher("zebra", 4)    #=> "difve"