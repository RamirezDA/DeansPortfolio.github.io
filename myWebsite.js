// JavaScript code in myWebsite.js

function toggleSize(elementId) {
    var element = document.getElementById(elementId);
    if (element.classList.contains("expanded")) {
        // If already expanded, minimize it
        element.classList.remove("expanded");
    } else {
        // If not expanded, expand it
        element.classList.add("expanded");
    }
}

