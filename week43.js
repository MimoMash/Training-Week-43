// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {

    const TREE = {
        leaves: "*",
        stem: "x",
        space: " "
    }

    for (let i = 1, j = 1; i <= height; i++, j += 2) {
        if (i < height) {
            console.log(TREE.space.repeat(height - i - 1) + TREE.leaves.repeat(j));
        } else 
            console.log(TREE.space.repeat(Math.abs(height - 2)) + TREE.stem);
    }
}

drawTree(5);

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {

    const arrow = "* ";
 
    for (let i = 1, j = size + size - 1; i <= size + size -1; i++, j--) {
        if (i < size) {
            console.log(arrow.repeat(i));
        } else
            console.log(arrow.repeat(j));
    }
}

drawArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(n, m) {

    const SYMBOLS = {
        corner: "+",
        horizontal: "----",
        vertical: "|",
        space: "    "
    }

    console.log(SYMBOLS.corner + SYMBOLS.horizontal.repeat(n) + SYMBOLS.corner);
    for (let i = 0; i < m; i++) {
        console.log(SYMBOLS.vertical + SYMBOLS.space.repeat(n) + SYMBOLS.vertical);
    }
    console.log(SYMBOLS.corner + SYMBOLS.horizontal.repeat(n) + SYMBOLS.corner);
}

drawBox(2, 2);

/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function heterogramDetector(word) {

    word = word.toLowerCase();
    word = word.split("");

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] == word[j]) {
                return false
            }
        }
    } 
    return true      
}

console.log(heterogramDetector("Copyright"));

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function anagramChecker(word1, word2) {

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if (word1.length == word2.length) {
        word1 = word1.split("").toSorted().join("");
        word2 = word2.split("").toSorted().join("");
    }

    return word1 == word2;
}

console.log(anagramChecker("Mug", "gum"));
