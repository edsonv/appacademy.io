class Code
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  attr_reader :pegs

  def self.valid_pegs?(chars)
    chars.all? { |char| Code::POSSIBLE_PEGS.has_key?(char.upcase) }
  end

  def self.random(length)
    pegs = Array.new(length) {Code::POSSIBLE_PEGS.keys.sample}
    Code.new(pegs)
  end

  def self.from_string(string)
    Code.new(string.split(""))
  end

  def initialize(pegs)
    raise "no valid pegs" if !Code.valid_pegs?(pegs)
    @pegs = pegs.map(&:upcase)
  end

  def [](index)
    @pegs[index]
  end

  def length
    @pegs.length
  end

  def num_exact_matches(guess)
    count = 0
    guess.pegs.each.with_index do |ele, i|
      if ele == self[i]
        count += 1
      end
    end

    return count
  end

  def num_near_matches(guess)
    code_dup = self.pegs.dup
    guess_dup = guess.pegs.dup
    
    guess_dup.each_with_index do |peg, i|
      if peg == code_dup[i]
        code_dup[i] = nil
        guess_dup[i] = nil
      end
    end

    code_dup.delete(nil)
    guess_dup.delete(nil)

    count = 0
    
    # (0...guess.length).each do |i|
    #   if guess[i] != self.pegs[i] && self.pegs.include?(guess[i])
    #     count += 1
    #   end
    # end

    guess_dup.each_with_index do |peg, i|
      if code_dup.include?(peg)
        count += 1
        code_dup.delete_at(code_dup.index(peg))
      end
    end

    return count
  end

  def ==(other_code)
    self.length == other_code.length && self.num_exact_matches(other_code) == self.length
  end
end
