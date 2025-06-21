# Sets
# - declare
# - union, intersection, simmetric_difference, difference
# - Examples
# -- unique tags
# -- users taking, two actions

purchasingEmails = {"bob@gmail.com", "sam@yahoo.com", "riley@rileymail.org"}
helpEmails = {"sam@yahoo.com", "jo@josbiulling.com", "bob@gmail.com"}

print("Users making a purchase and also calling help desk")
print(set(purchasingEmails) & set(helpEmails))
