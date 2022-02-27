function parse(query, code) {
    /****/
    if (code == '') {
        // Remove diacritics
        query = query.toUpperCase().replace("Á", "A")
            .replace("É", "E")
            .replace("Í", "I")
            .replace("Ó", "O")
            .replace("Ú", "U");

        // Remove irrelevant symbols
        query = query.replace("*", "")
            .replace("/", "")
            .replace("+", "")
            .replace("-", "");

    }

    if (code == "xx" && query.length == 2) {
        return [];
    }
    /****/
}