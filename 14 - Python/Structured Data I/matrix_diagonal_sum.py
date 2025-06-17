def diagonalSum(matrix: list[list[int]]) -> int:
    elements = []

    for i in range(0, len(matrix)):
        elements.append(matrix[i][i])
        if i != len(matrix) - i - 1:
            elements.append(matrix[i][len(matrix) - i - 1])
    return sum(elements)


print(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
print(diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]))
print(diagonalSum([[5]]))
