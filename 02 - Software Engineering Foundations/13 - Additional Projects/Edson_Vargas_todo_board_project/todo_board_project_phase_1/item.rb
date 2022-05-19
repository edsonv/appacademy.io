class Item
  def self.valid_date?(date)
    parts = date.split("-").map(&:to_i)
    year, month, day = parts
    return false if parts.length != 3
    return false if !(0..12).include?(month)
    return false if !(0..31).include?(day)
    true
  end

  attr_reader :deadline
  attr_accessor :title, :description

  def initialize(title, deadline, description)
    @title = title
    @deadline = deadline
    @description = description
    raise "Deadline is not valid" if !Item.valid_date?(deadline)
  end

  def deadline=(new_deadline)
    raise "Deadline is not valid" if !Item.valid_date?(new_deadline)
    @deadline = new_deadline
  end
end
