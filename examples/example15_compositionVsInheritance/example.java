class Bird {
    Boolean hasWings = true;
    Boolean hasBeak = true;
}

class Toucan extends Bird {
    int beakSizeInCm = 10;
    List<String> colours = List.of("blue", "red", "yellow");
}

class Swan extends Bird {
    int beakSizeInCm =  5;
    Boolean isWhite = true;
}