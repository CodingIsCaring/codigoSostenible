// Código defensivo, ¿sí o no?
function findTheSmallestNumber(numbers) {
    if (numbers == null){
        return "Numbers can't be null";
    }
    if (numbers.length == 0){
        return "0";
    }
    return Math.min(...numbers);
}