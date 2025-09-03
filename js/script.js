let body = document.getElementById("body");
window.onload = function() {
    body.style.backgroundColor = "skyblue";
}

let inputField = document.getElementById("inputField");

//focus event
inputField.addEventListener("input", function() {
    inputField.style.backgroundColor = "violet";
});

//blur event
inputField.addEventListener("blur", function() {
    inputField.style.backgroundColor = "violet";
});

//input event
inputField.addEventListener("input", function() {
    console.log("Current input value: " + inputField.value);
});

//keydown event
inputField.addEventListener("keydown", function() {
    console.log("Key Down: " + event.key);
});

function toggleAccordion(button) {
    let content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

let images = [
    "Images/image-2.jpg",
    "Images/image-3.jpg",
    "Images/image-1.jpg"
    
]

let currentIndex = 0;
function showImage() {
    document.getElementById("carouselImage").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previouseImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

setInterval(nextImage, 3000);

document.getElementById("myForm").onSubmit = function(event) {
    event.preventDefault();
    
    let isValid = true;

    let name = document.getElementById("name").value.trim;
    let email = document.getElementById("email").value.trim;
    let password = document.getElementById("password").value.trim;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").style.color = "blue";
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    } else if(name.length < 3) {
        document.getElementById("nameError").style.color = "blue";
        document.getElementById("nameError").innerText = "Name must be at least 3 characters long.";
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("nameError").style.color = "blue";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    } else if(name.length < 3) {
        document.getElementById("nameError").style.color = "blue";
        document.getElementById("nameError").innerText = "Invalid email format.";
    }
    if (password === "") {
        document.getElementById("nameError").style.color = "blue";
        document.getElementById("passwordError").innerText= "Password is required";
        isValid = false;
    } else if(name.length < 9) {
        document.getElementById("nameError").style.color = "blue";
        document.getElementById("nameError").innerText = "Password must be at least 9 characters, include uppercase, lowercase, number and special character.";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
}