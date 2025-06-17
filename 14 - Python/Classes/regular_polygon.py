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
