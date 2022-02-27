class Address {
    String street;
    int postcode;

    public Address(String street, int postcode) {
        this.street = street;
        this.postcode = postcode;
        saveIntoFile(this.street, this.postcode);
    }

    public void saveIntoFile(String street, int postcode) {
        throws IOException {
            FileWriter fstream = new FileWriter("out.txt");
            BufferedWriter out = new BufferedWriter(fstream);
            out.write("Street: " + street + ". Postcode: " + postcode);
            out.close();
        }
    }
}