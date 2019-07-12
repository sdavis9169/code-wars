//Write a function that takes in a string and returns it with the vowels removed

function disemvowel(str) {
    return str.replace(/[aeiou]/ig, '');
}