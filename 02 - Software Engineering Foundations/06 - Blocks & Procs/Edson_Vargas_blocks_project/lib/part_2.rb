def all_words_capitalized?(words)
  words.all? {|word| word.capitalize === word}
end

def no_valid_url?(urls)
  invalid_urls = [".com", ".net", ".io", ".org"]
  urls.none? do |url|
    invalid_urls.any? {|ending| url.end_with?(ending)}
  end
end

def any_passing_students?(students)
  students.any? do |student|
    average = student[:grades].sum / (student[:grades].length * 1.0)
    average >= 75
  end
end