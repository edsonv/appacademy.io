# Write your class here.
from math import sqrt


class RegularPolygon:
    type = "Polygon"

    def __init__(self, num_sides, length):
        if num_sides < 3:
            raise Exception("A poligon mut have at least 3 sides.")
        self.num_sides = num_sides
        self.length = length

    def identify_polygon(self):
        polygon_dict = {
            3: "Triangle",
            4: "Quadrilateral",
            5: "Pentagon",
            6: "Hexagon",
            7: "Heptagon",
            8: "Octagon",
            9: "Nonagon",
            10: "Decagon",
        }

        try:
            self.type = polygon_dict[self.num_sides]
        except KeyError:
            self.type = f"Poligon with {self.num_sides} sides"

    @classmethod
    def polygon_factory(cls, values):
        return [cls(num_sides, length) for num_sides, length in values]

    @staticmethod
    def get_perimeter(polygon):
        return polygon.num_sides * polygon.length


class Triangle(RegularPolygon):
    def __init__(self, num_sides, length):
        if num_sides != 3:
            raise Exception("A triangle must have exactly three sides")
        super().__init__(num_sides, length)
        self.perimeter = super().get_perimeter(self)
        self.area = self.get_area()

    def get_area(self):
        s = self.perimeter / 2

        return sqrt(s * (s - self.length) * (s - self.length) * (s - self.length))


triangle_a = Triangle(3, 3)
print(triangle_a.perimeter)  # 9
print(triangle_a.area)  # 3.8971...

triangle_b = Triangle(3, 12)
print(triangle_b.perimeter)  # 36
print(triangle_b.area)  # 62.3538...

# triangle_c = Triangle(4, 12)
# print(triangle_c.perimeter) # Exception: A triangle must have exactly three sides
