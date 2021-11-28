class Room
  def initialize(capacity)
    @capacity = capacity
    @occupants = []
  end

  def capacity
    @capacity
  end

  def occupants
    @occupants
  end

  def full?
    return true if @occupants.length == @capacity
    return false
  end
  
  def available_space
    @capacity - @occupants.length
  end

  def add_occupant(person_name)
    if !self.full?
      @occupants << person_name
      return true
    end

    false
  end
end
