function validateForm() {
    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;
    var e = document.getElementById("email").value;

    if (f === "" || l === "" || e === "") {
        alert("Please fill in all the fields.");
        return false; 
    }
    else if (!e.includes("@") || !e.includes(".com")) {
        alert("Please enter a valid email address.");
        return false; 
    }
     else {
        alert("Thank you for your feedback!");
        return true; 
    }
}
