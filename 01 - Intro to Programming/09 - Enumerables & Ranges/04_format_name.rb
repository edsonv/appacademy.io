# Format Name

# Write a method format_name that takes in a name string and returns the name properly capitalized.

# Hint: use str.upcase and str.downcase
# "abc".upcase # => "ABC"

def format_name(str)
  
  str_arr = str.split(" ")
  cptlzd = []
  
  str_arr.each do |str|
    cptlzd << str[0].upcase + str[1..-1].downcase
  end
  
  return cptlzd.join(" ")

end

puts format_name("chase WILSON") # => "Chase Wilson"
puts format_name("brian CrAwFoRd scoTT") # => "Brian Crawford Scott"