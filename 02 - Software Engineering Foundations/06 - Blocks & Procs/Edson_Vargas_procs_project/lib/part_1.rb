def my_map(arr, &block)
  mapped = []
  arr.each do |el|
    mapped << block.call(el)
  end

  return mapped
end

def my_select(arr, &block)
  selected = []
  arr.each do |el|
    if (block.call(el))
      selected << el
    end
  end

  return selected
end

def my_count(arr, &block)
  count = 0

  arr.each do |el|
    if (block.call(el))
      count += 1
    end
  end

  return count
end

def my_any?(arr, &block)
  i = 0

  while (i < arr.length)
    if (block.call(arr[i]))
      return true
    end
    i += 1
  end
  
  return false
end

def my_all?(arr, &block)
  i = 0
  while (i < arr.length)
    if(!block.call(arr[i]))
      return false
    end
    i += 1
  end

  return true
end

def my_none?(arr, &block)
  i = 0
  while (i < arr.length)
    if(block.call(arr[i]))
      return false
    end
    i += 1
  end

  return true
end