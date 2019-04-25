//Remove n exclamation marks in the sentence from left to right. n is positive integer.
let s = "!!!Hi !!hi!!! !hi"

const remove = (s, n) => {
    let newString = s
    for (let i = 0; i < n; i++) {
      newString = newString.replace('!', '')
    }
    return newString
  }
console.log(s)

console.log(remove(s, 5))

  