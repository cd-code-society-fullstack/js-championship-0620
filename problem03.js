const reverseWordsInString = (s) =>{
    // split the input string by spaces
    const words = s.split(" ");
    // reverse the words
    const reversedWords = words.reverse();
    // join the words back into a string with spaces
    const result = reversedWords.join(" ");
    return result;
}