# Write your class here.
class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

    def description(self):
        return (
            f"{self.title} is writter by {self.author} and was published in {self.year}"
        )


class NonfictionBook(Book):
    def __init__(self, title, author, year, subject):
        super().__init__(title, author, year)
        self.subject = subject

    def description(self):
        return f"{self.title} is written by {self.author} and was published in {self.year}. It is a nonfiction book about {self.subject}."


book = Book("Alice in Wonderland", "Lewis Carroll", 1865)
print(
    book.description()
)  # Alice in Wonderland is written by Lewis Carroll and was published in 1865.

nonfiction = NonfictionBook(
    "Cosmos", "Carl Sagan", 1980, "cosmic evolution and human civilization"
)
print(
    nonfiction.description()
)  # Cosmos is written by Carl Sagan and was published in 1980. It is a nonfiction book about cosmic evolution and human civilization.
