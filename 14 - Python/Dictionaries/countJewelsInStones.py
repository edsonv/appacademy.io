def countJewelsInStones(jewels, stones):
    count = 0
    for stone in stones:
        if stone in jewels:
            count += 1
    return count


print(countJewelsInStones(jewels="aA", stones="aAAbbbb"))
print(countJewelsInStones(jewels="z", stones="ZZ"))
