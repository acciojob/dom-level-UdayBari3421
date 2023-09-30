/*  your css code here. If applicable */
// Get the element with the id 'level'
var targetElement = document.getElementById('level');

// Function to determine the DOM level of an element
function getDomLevel(element) {
    var level = 0;
    while (element.parentNode) {
        level++;
        element = element.parentNode;
    }
    return level;
}

// Call the function and display the result using alert
alert("The level of the element is: " + getDomLevel(targetElement));
