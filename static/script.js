// Step 4: Variable Declarations
let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

// Step 5: Function Definition
function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

// Step 6: Conditional Check
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

// Step 7: Array and Loop
let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("found the Banana in 3!");
        }
    }
}

//findTheBanana(L1);
//findTheBanana(L2);

// Step 8: forEach Loop for the Same Functionality
function findTheBanana(arr) {
    arr.forEach(item => {
        if (item === "Banana") {
            alert("we found a Banana in the array");
        }
    });
}

//findTheBanana(L1);
//findTheBanana(L2);

// Step 9: DOM
function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greetingMessage = "";

    if (h < 12) {
        greetingMessage = "Good morning";
    } else if (h < 18) {
        greetingMessage = "Good afternoon";
    } else if (h < 20) {
        greetingMessage = "Good evening";
    } else {
        greetingMessage = "Good night";
    }

    document.getElementById("greeting").innerHTML = `${greetingMessage}, my name is Chloe Zhou.`
}
greetingFunc()


// Footer with current year
function addYear() {
    let currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerText = currentYear;
}

// For fun.html & button
function showList() {
    let list = document.getElementById("funList");
    let button = document.getElementById("revealButton");

    if (list && button) {
        list.style.display = "block";  
        button.style.display = "none";
    }
}

// Bio index.html Read More and Read Less
$(document).ready(function() {
    $("#readMoreBtn").click(function() {
        $("#shortBio").hide();
        $("#fullBio").show();
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function() {
        $("#fullBio").hide();
        $("#shortBio").show();
        $("#readMoreBtn").show();
        $("#readLessBtn").hide();
    });
});


// API check Contact Me Validation
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let isValid = true;

        // Name
        let name = document.getElementById("name");
        let nameError = document.getElementById("nameError");
        if (!name.checkValidity()) {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Email
        let email = document.getElementById("email");
        let emailError = document.getElementById("emailError");
        if (!email.checkValidity()) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Comment
        let comment = document.getElementById("comment");
        let commentError = document.getElementById("commentError");
        if (!comment.checkValidity()) {
            commentError.textContent = "Please enter a message.";
            isValid = false;
        } else {
            commentError.textContent = "";
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
