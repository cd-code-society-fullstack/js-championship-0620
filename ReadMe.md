## Problem 01 

## Problem

Given a string `s`, return the lexicographically previous string in all permutations of that string. If there is no such permutation, return the string 'no answer' instead.

A lexicographically previous string is a string that would come immediately before the given string in a list of all permutations of the string, sorted in lexicographic (dictionary) order.

## Function Description

Complete the function `previousPermutation` in the editor. 

`previousPermutation` has the following parameter(s):
* string `s`: the string to analyze

## Returns

* string: Return the lexicographically previous permutation of the string. If no such string exists, return the string 'no answer'

## Input Format for Custom Testing

Input from stdin will be processed as follows and passed to the function.

The only line contains the string `s`.

## Examples

#### Example 1

```python
previousPermutation('yx')
```
**Output**
```
xy
```

{Try It!}(node .guides/01/try-it-01.js)

**Explanation 1**

Rearrange the characters in `s` = 'yx' to create the next lexicographically previous string: 'xy'.

#### Example 2

```python
previousPermutation('zz')
```
**Output**
```
no answer
```

{Try It!}(node .guides/01/try-it-02.js)


**Explanation 2**

There is no way to rearrange the characters in `s` = 'zz' to create a lexicographically previous string, so return "no answer"

#### Example 3

```python
previousPermutation('gfhe')
```
**Output**
```
gfeh
```

{Try It!}(node .guides/01/try-it-03.js)


**Explanation 3**

`s` has the following permutations, in alphabetical order:

['efgh', 'efhg', 'egfh', 'eghf', 'ehfg', 'ehgf', 'fegh', 'fehg', 'fgeh', 'fghe', 'fheg', 'fhge', 'gefh', 'gehf', 'gfeh', **'gfhe'**, 'ghef', 'ghfe', 'hefg', 'hegf', 'hfeg', 'hfge', 'hgef', 'hgfe']

The next lexicographically previous string is before the bolded word.

## Constraints

* The length of `s` is at least 1 and at most 100.
* `s` consists of lowercase English letters.

# Problem 02

# Reverse the Word

Given a word, your task is to reverse the characters in that word.

### Function Description

Complete the function `reverseWord` in the editor. 

`reverseWord` has the following parameter(s):

string word: the string to reverse

### Returns

string: the reversed version of the input string

### Input Format for Custom Testing

Input from stdin will be processed as follows and passed to the function.

The only line contains the string `word`.

### Example

#### Sample Case 0

```
reverseWord('hello')
// output: 'olleh'
```

{Try It!}(node .guides/02/try-it-01.js)

#### Sample Case 1

```
reverseWord('world')
// output: 'dlrow'
```

{Try It!}(node .guides/02/try-it-02.js)

#### Sample Case 2

```
reverseWord('reverse')
// output: 'esrever'
```

{Try It!}(node .guides/02/try-it-03.js)

console.log(reverseWord('hello'));  // Output: 'olleh'
console.log(reverseWord('world'));  // Output: 'dlrow'
console.log(reverseWord('reverse'));  // Output: 'esrever'

# Problem 03

Sure, here is a slightly harder problem:

## Problem

Given a string `s`, your task is to reverse the order of words in the string. A word is defined as a contiguous sequence of alphanumeric characters. You need to ignore any other characters (like punctuation) when determining the words, but still include them in the final output in their original positions.

Write a function `reverseWordsInString(s)` that takes a string `s` as its parameter. It should return a string where the words in `s` are in reverse order.

The length of `s` is at least 1 and at most 5 * 10^4. The string will only consist of English letters (both lower-case and upper-case), digits, and punctuation marks.

## Examples

1. 
   **Input**
    ```js
    reverseWordsInString("Hello, world!")
    ```
    **Output**
    ```js
    "world!, Hello"
    ```
    **Explanation**: The words in the string are "Hello," and "world!". Reversing their order gives "world!, Hello".

{Try It!}(node .guides/03/try-it-01.js)

2. 
    **Input**
    ```js
    reverseWordsInString("This is a test.")
    ```
    **Output**
    ```js
    "test. a is This"
    ```
    **Explanation**: The words in the string are "This", "is", "a", and "test.". Reversing their order gives "test. a is This".

{Try It!}(node .guides/03/try-it-02.js)

## Constraints

The words in the input string are separated by at least one space. The output string should have the same punctuation and capitalization as the input string.


// Test Case 1: Single word
console.log(reverseWordsInString("OpenAI"));  
// Output: "OpenAI"

// Test Case 2: Word and punctuation with no space
console.log(reverseWordsInString("Hello,world!"));  
// Output: "Hello,world!"

// Test Case 3: Words with numbers
console.log(reverseWordsInString("The 3 cats jumped over 7 fences."));  
// Output: "fences. 7 over jumped cats 3 The"

// Test Case 4: Empty string
console.log(reverseWordsInString(""));  
// Output: ""

// Test Case 5: String with multiple spaces between words
console.log(reverseWordsInString("This  is  a  test."));  
// Output: "test. a is This"
