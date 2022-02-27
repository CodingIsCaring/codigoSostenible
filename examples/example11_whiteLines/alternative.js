function parse(query, code) {
    /****/
    if (code == '') {
        query = removeDiacritics(query);
        query = removeIrrelevantSymbols(query);
    }

    if (code == 'xx' && query.length == 2) {
        return [];
    }
    /****/
}