require "./list.rb"

class TodoBoard
  def initialize(label)
    @list = List.new(label)
  end

  def get_command
    print "\nEnter a command: "
    cmd, *args = gets.chomp.split(" ")

    case cmd
    when "mktodo"
      @list.add_item(*args)
    when "up"
      @list.up(*args.map(&:to_i))
    when "down"
      @list.down(*args.map(&:to_i))
    when "swap"
      @list.swap(*args.map(&:to_i))
    when "sort"
      @list.sort_by_date!
    when "priority"
      @list.print_priority
    when "print"
      args.empty? ? @list.print : @list.print_full_item(args[0].to_i)
    when "toggle"
      @list[target].add_item(*args)
    when "quit"
      return false
    else
      print "Sorry, that command is not recognized."
    end
    true
  end

  def run
    return if !get_command while true
  end
end
