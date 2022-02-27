class Chair {
    List<Leg> legs = List.of(new Leg(/***/), new Leg(/***/), new Leg(/***/), new Leg(/***/));
    Material material = Material.STEEL;
}

class Table {
    List<Leg> legs = List.of(new Leg(/***/), new Leg(/***/), new Leg(/***/), new Leg(/***/));
    Material material = Material.WOOD;
}

class Wardrobe {
    Material material = Material.PLASTIC;
}

class Leg {
    int size;
    Material material;
}

enum Material {
    WOOD, STEEL, PLASTIC
}