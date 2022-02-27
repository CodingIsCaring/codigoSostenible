class Furniture {
    List<Leg> legs = List.of(new Leg(/***/), new Leg(/***/),
            new Leg(/***/), new Leg(/***/));
    Material material = Material.PLASTIC;
}

class Chair extends Furniture {
    Material material = Material.STEEL;
}

class Table extends Furniture {
    Material material = Material.WOOD;
}

class Wardrobe extends Furniture {
    List<Leg> legs???
    List<Wheel> wheels???
}

class Leg {
    int size;
    Material material;
}

enum Material {
    WOOD, STEEL, PLASTIC
}