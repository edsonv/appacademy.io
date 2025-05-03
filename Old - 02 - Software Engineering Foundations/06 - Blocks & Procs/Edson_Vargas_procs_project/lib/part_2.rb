def reverser(string, &block)
  return block.call(string.reverse)
end

def word_changer(sentence, &block)
  new_sentence = []
  sentence.split.each do |word|
    new_sentence << block.call(word)
  end

  return new_sentence.join(" ")
end

def greater_proc_value(number, proc_1, proc_2)
  result_1 = proc_1.call(number)
  result_2 = proc_2.call(number)

  if (result_1 > result_2)
    return result_1
  else
    return result_2
  end
end

def and_selector(arr, proc_1, proc_2)
  new_array = []
  arr.each do |ele|
    result_1 = proc_1.call(ele)
    result_2 = proc_2.call(ele)
    if (result_1 && result_2)
      new_array << ele
    end
  end

  return new_array
end

def alternating_mapper(arr, proc_1, proc_2)
  new_array = []
  arr.each_with_index do |ele, idx|
    if  (idx % 2 === 0)
      new_array << proc_1.call(ele)
    else
      new_array << proc_2.call(ele)
    end
  end

  return new_array
end