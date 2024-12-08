let isRegistered = false;
let isSolo = false;
let PlayersData = [];

function showRegistrationForm() {
    if (isSolo) {
        alert("You are already registered as a solo player.");
    } else {
        document.getElementById("registrationForm").style.display = "block";
    }
}

function registerSoloPlayer() {
    const name = document.getElementById("nameInput").value.trim();
    const dob = document.getElementById("dobInput").value;
    const email=document.getElementById("emailInput").value;
    const gender = document.getElementById("genderInput").value;
    const town = document.getElementById("townInput").value;
    const education = document.getElementById("educationInput").value;

    // Validate the inputs
    if (!name || name.length < 3) {
        alert("Player's name must be at least 3 characters.");
        return;
    }

   if (!email.endsWith("@SomeEmail.com"))
   {
    alert ("EMail Address must end with @SomeEmail.com");
    return;
   }
    // Perform age calculation based on date of birth
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const age = Math.floor((currentDate - dobDate) / (365.25 * 24 * 60 * 60 * 1000));
    if (age <= 12) {
        alert("Age must be greater than 12.");
        return;
    }

    if (gender === "" || town === "" || education === "") {
        alert("All fields are required.");
        return;
    }

    // Assuming a simple email validation that checks for "@SomeEmail.com" as the domain
    //if (!education.toLowerCase().endsWith("@someemail.com")) {
       // alert("Email address must end with '@SomeEmail.com'.");
      //  return;
   // }

    // If all validations pass, add the player to PlayersData
    PlayersData.push({ name, dob, email, gender, town, education });
    isRegistered = true;
    isSolo = true;

    // Enable the play button
    document.getElementById("playButton").disabled = false;

    // Hide the registration form
    document.getElementById("registrationForm").style.display = "none";

    alert("Registration is complete. You can now play the game as a solo player.");
}

function play() {
    if (isRegistered) {
       
        window.location.href='Jepordy.html';
    } else {
        alert("Please register first.");
    }
}

function cancelRegistration() {
    document.getElementById("registrationForm").style.display = "none";
}


function Exit() {
    if (isRegistered) {
        alert("Exiting the game.");
        isRegistered = false;
        isSolo = false;
        document.getElementById("playButton").disabled = true;
    } else {
        alert("You are not registered.");
    }
}
