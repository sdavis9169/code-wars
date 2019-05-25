// Write a function called reverseMe that reverses a given array.

function reverseMe(arr) {
    return arr.reverse()
  
  }

//   Write a function that takes in an array of integers and returns an array that matches this format: [youngest age, oldest age, difference between the youngest and oldest age]. For example: [19,29,10]

function stuff (arr)  {
    const sorted = arr.sort((a, b) => a - b);

    return [sorted[0], sorted[sorted.length - 1] ]
}

//return an array without any duplicates

function removeDupes (arr) {
    return arr.reduce(() => {
        if (r.includes(e)) {
            r.push(e)
        }
        return r
    }, [])
}