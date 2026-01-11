module.exports = {
  rooms: [
    {
      id: 1,
      name: "Crossroad",
      description:
        "You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.",
      exits: { n: 2, e: 3, w: 4, s: 5 },
    },
    {
      id: 2,
      name: "Northern point",
      description:
        "You are standing at the north point of a crossroad. To the south, you see an empty intersection.",
      exits: { s: 1, n: 6 },
    },
    {
      id: 3,
      name: "Eastern point",
      description:
        "You are standing at the east point of a crossroad. To the west, you see an empty intersection.",
      exits: { w: 1 },
    },
    {
      id: 4,
      name: "Western point",
      description:
        "You are standing at the west point of a crossroad. To the east, you see an empty intersection.",
      exits: { e: 1 },
    },
    {
      id: 5,
      name: "Southern point",
      description:
        "You are standing at the south point of a crossroad. To the north, you see an empty intersection.",
      exits: { n: 1 },
    },
    {
      id: 6,
      name: "Dark Dungeon",
      description:
        "A cold, damp dungeon. It's too dark to see anything clearly without a light source.",
      exits: { s: 2, e: 7 },
    },
    {
      id: 7,
      name: "Ancient Armory",
      description:
        "Racks of rusted equipment line the walls. There might be something useful here.",
      exits: { w: 6, e: 8 },
    },
    {
      id: 8,
      name: "Grand Hall",
      description:
        "A massive hall with high ceilings and tall pillars. The air feels heavy with history.",
      exits: { w: 7 },
    },
  ],
  items: [
    {
      name: "rock",
      description: "Just a simple rock",
      room: 1,
    },
    {
      name: "sandwich",
      description: "A tasty looking sandwich",
      room: 2,
      isFood: true,
    },
    {
      name: "Ancient Torch",
      description: "An old torch that still flickers with an ethereal light.",
      room: 3,
    },
    {
      name: "Rusty Sword",
      description: "A chipped and rusted blade, but still dangerous.",
      room: 7,
    },
    {
      name: "Apple",
      description: "A crisp red apple.",
      room: 8,
      isFood: true,
    },
    {
      name: "Dagger",
      description: "A sharp, concealable blade.",
      room: 4,
    },
  ],
};
