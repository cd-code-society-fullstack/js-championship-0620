const reverseWord = (word) => {
    // split the word into an array of characters, reverse the array, and join it back into a string
    return word.split('').reverse().join('');
}

module.exports = reverseWord;
