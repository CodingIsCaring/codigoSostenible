function isWordLengthCorrect(wordLength, word) {
    if (wordLength === word.length) {
        return true;
    }
    return false;
}

isWordLengthCorrect(5, 'hello');
