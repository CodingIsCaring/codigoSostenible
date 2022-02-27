public Boolean hasMoreThanMaximumFields(int fields) {
    private int maxFieldsPerRecord = 10;

    if (fields > maxFieldsPerRecord) {
        return true;
    }
    return false;
}

// Not meaningful enough
// private int numberTen = 10;
