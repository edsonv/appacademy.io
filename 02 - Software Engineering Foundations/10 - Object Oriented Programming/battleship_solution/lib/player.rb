class Player
  def get_move
    print "enter a position: "
    gets.chomp.split.to_i
  end
end
