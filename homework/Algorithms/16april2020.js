/* Challenge 1: Book Index (from the algorithm book, page 69)
Given a sorted array of pages where a term appears, return an index string like so:
Consecutive pages should form ranges separated by a hyphen, with each page or range separated by a comma.
For [1,13,14,15,37,38,70], return this string: "1, 13-15, 37-38, 70". 
Punctuation MUST be exact.
*/

// // For testing:
var test1 = [1, 13, 14, 15, 37, 38, 70] // Output: "1, 13-15, 37-38, 70"
var test2 = [1, 2, 3]; // Output: "1-3"
var test3 = [5]; // Output: "5"
var test4 = []; // Output: ""
var test5 = [1,2,3,4,5,8,9,10,15]; // Output: "1-5, 8-10, 15"
var test6 = [1, 3, 6, 8, 11, 12, 13, 16, 17]; // Output: "1, 3, 6, 8, 11-13, 16-17"

function bookIndex(arr) {
    var rangeStr = "";
    var isInSeries = false;
    var curNum = arr[0];
    var prevNum = 0;

    for (Var k = 0; k < arr.length; k++) {
        var cumNum = arr[k];

        if (!isInSeries && prevNum + 1 === curNum) {
            rangeStr += "," curNum; 
            isInSeries = true;
        }
        if (prevNum + 1 === curNum) {

        }
    }
}

bookIndex(test1)
bookIndex(test2)
bookIndex(test3)
bookIndex(test4)
bookIndex(test5)
bookIndex(test6)