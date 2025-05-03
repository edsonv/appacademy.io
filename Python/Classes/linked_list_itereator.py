# Write your class here.


class LinkedListIterator:
    def __init__(self, head):
        self._current = head

    def __iter__(self):
        return self

    def __next__(self):
        if not self._current:
            raise StopIteration
        else:
            value = self._current._value
            self._current = self._current._next
            return value


class Node:
    def __init__(self, value):
        self._value = value
        self._next = None


class LinkedList:
    def __init__(self):
        self._head = None
        self._tail = None
        self._length = 0

    def __iter__(self):
        return LinkedListIterator(self._head)

    def add(self, value):
        new_node = Node(value)

        if self._head is None:
            self._head = new_node
        else:
            self._tail._next = new_node

        self._tail = new_node
        self._length += 1
        return self


linked_list = LinkedList()
linked_list.add("node 1")
linked_list.add("node 2")
linked_list.add("node 3")
linked_list.add("node 4")
linked_list.add("node 5")

# this loop should print "Current node: node x" five times
# for each node in the linked list
for i in linked_list:
    print(f"Current node: {i}")
