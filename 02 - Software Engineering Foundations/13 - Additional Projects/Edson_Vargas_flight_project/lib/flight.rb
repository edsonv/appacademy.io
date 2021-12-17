class Flight

  attr_reader :passengers

  def initialize(flight_number, capacity)
    @flight_number = flight_number
    @capacity = capacity
    @passengers = []
  end

  def full?
    return false if @passengers.length < @capacity
    return true
  end

  def board_passenger(passenger)
    if !self.full? && passenger.has_flight?(@flight_number)
      @passengers << passenger
    end
  end

  def list_passengers
    list = []
    @passengers.each { |passenger| list << passenger.name }
    return list
  end

  def [](index)
    @passengers[index]
  end

  def <<(passenger)
    self.board_passenger(passenger)
  end
end