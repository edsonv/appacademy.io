# Write your class here.
class StrNumeric:
    def __init__(self, value):
        if isinstance(value, str) and not value.isnumeric():
            raise Exception("String value can have only numeric characters.")

        self.val = value

    def __add__(self, thing_2):
        return int(self.val) + int(thing_2)


str_1 = StrNumeric("1")
print(str_1 + 2)  # 3

str_44 = StrNumeric("44")
print(str_44 + 6)  # 50

num_44 = 44
print(num_44 + 6)  # 50

# not_numeric = StrNumeric(
#     "1.2"
# )  # Exception: String value can have only numeric characters.
