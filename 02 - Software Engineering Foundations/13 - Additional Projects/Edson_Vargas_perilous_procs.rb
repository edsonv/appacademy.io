def some?(arr, &prc)
  arr.each do |el|
    return true if prc.call(el)
  end
  false
end

def exactly?(arr, n, &prc)
  count = 0

  arr.each do |el|
    count += 1 if prc.call(el)
  end

  count == n
end

def filter_out(arr, &prc)
  new_arr = []
  arr.each do |el|
    new_arr << el if !prc.call(el)
  end
  new_arr
end

def at_least?(arr, n, &prc)
  count = 0
  arr.each do |el|
    count += 1 if prc.call(el)
  end
  count >= n
end

def every?(arr, &prc)
  arr.each do |el|
    return false if !prc.call(el)
  end
  return true
end

def at_most?(arr, n, &prc)
  count = 0
  arr.each do |el|
    count += 1 if prc.call(el)
  end
  count <= n
end

def first_index(arr, &prc)
  indices = []
  arr.each.with_index do |el, i|
    indices << i if prc.call(el)
  end

  indices.first
end

def xnor_select(arr, prc1, prc2)
  new_arr = []
  arr.each do |el|
    new_arr << el if (prc1.call(el) && prc2.call(el)) || (!prc1.call(el) && !prc2.call(el))
  end
  new_arr
end

def filter_out!(arr, &prc)
  arr.each do |el|
    arr.delete(el) if prc.call(el)
  end
  arr
end

def multi_map(arr, n = 1, &prc)
  new_arr = []
  arr.each do |el|
    i = 0
    current = el
    while i < n
      current = prc.call(current)
      i += 1
    end
    new_arr << current
  end

  new_arr
end

def proctition(arr, &prc)
  truthy = []
  falsy = []
  arr.each do |el|
    if prc.call(el)
      truthy << el
    else
      falsy << el
    end
  end
  truthy + falsy
end

def selected_map!(arr, prc1, prc2)
  arr.each.with_index do |el, i|
    if prc1.call(el)
      arr[i] = prc2.call(el)
    end
  end
  return nil
end

def chain_map(value, procs)
  current = value
  procs.each do |prc|
    current = prc.call(current)
  end
  current
end

def proc_suffix(sentence, suffixes)
  new_words = []
  words = sentence.split(" ")
  words.each do |word|
    new_word = word
    suffixes.each do |prc, suffix|
      new_word += suffix if prc.call(word)
    end
    new_words << new_word
  end
  new_words.join(" ")
end

def proctition_platinum(arr, *prcs)
  partition = {}
  prcs.each_index { |i| partition[i + 1] = [] }
  array.each do |el|
    prcs.each_with_index do |prc, i|
      if prc.call(el)
        partition[i + 1] << el
        break
      end
    end
  end
  partition
end

def procipher(sentence, cipher)
  words = sentence.split(' ')
  new_words = words.map do |word|
    new_word = word
    cipher.each do |checker, changer|
      new_word = changer.call(new_word) if checker.call(word)
    end
    new_word
  end
  new_words.join(' ')
end