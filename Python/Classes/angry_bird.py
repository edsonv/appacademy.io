class AngryBird:
    def __init__(self, x=0, y=0):
        self._x = x
        self._y = y

    def move_up_by(self, delta):
        self._y += delta

    @property
    def x(self):
        return self._x

    @property
    def y(self):
        return self._y

    @x.setter
    def x(self, value):
        if value < 0:
            self._x = 0
        self._x = value

    @y.setter
    def y(self, value):
        if value < 0:
            self._y = 0
        self._y = value


camo = AngryBird()

print(camo.y)
camo.move_up_by(6)
print(camo.y)
