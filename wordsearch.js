// creating a function which finds the word in the given arrays

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    // checks the array horizontally 
    for (l of horizontalJoin) {
        let reversedL = l.split("").reverse().join("")
        if (l.includes(word) || reversedL.includes(word)) {
            return true;
        }
    }

    //checks the array vertically 
    for (let i = 0; i < letters.length; i++) {
        let verticalJoin = letters.map(ls => ls[i]).join('')
        console.log(verticalJoin);
        let reversedV = verticalJoin.split("").reverse().join("");
        if (verticalJoin.includes(word) || reversedV.includes(word)) {
            return true;
        }
    }
   
    return false;

}

module.exports = wordSearch;