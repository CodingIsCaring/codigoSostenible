String Concatenate(String firstString, String secondString) {
    return String.Concat(firstString, secondString).ToLowerInvariant();
}

String first ="Abra";
String second = "Kadabra";
String concatenated = Concatenate(first, second);