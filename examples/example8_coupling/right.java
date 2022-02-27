class House {
    Window window;

    int getNumberOfWindowGlasses() {
        Window window = new Window();
        return window.getNumberOfGlasses();
    }
}

class Window {
    int glasses;

    int getNumberOfGlasses() {
        return this.glasses;
    }
}

House house = new House();
int numberOfGlasses = house.getNumberOfWindowGlasses();