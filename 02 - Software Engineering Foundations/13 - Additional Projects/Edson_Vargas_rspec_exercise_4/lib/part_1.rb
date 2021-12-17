def my_reject(array, &prc)
  new_array = []
  array.each { |el| new_array << el if !prc.call(el) }
  new_array
end

def my_one?(array, &prc)
  count = 0
  array.each do |el|
    if prc.call(el)
      count += 1
    end
  end

  if count == 1
    return true
  else
    return false
  end
end

def hash_select(hash, &prc)
  new_hash = {}
  hash.each do |k, v|
    if prc.call(k,v)
      new_hash[k] = v
    end
  end
  return new_hash
end

def xor_select(array, prc1, prc2)
  array.select { |el| (prc1.call(el) || prc2.call(el)) && !(prc1.call(el) && prc2.call(el)) }
end

def proc_count(value, procs)
  procs.count { |prc| prc.call(value)}
end