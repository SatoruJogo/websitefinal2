const users = [];

function signup() {
    const newUsername = document.getElementById("newUsername").value;
    const newEmail = document.getElementById("email").value;
    const newPassword = document.getElementById("newPassword").value;
    const role = document.getElementById("role").value; 

    const existingUser = users.find(user => user.username === newUsername || user.email === newEmail);
    if (existingUser) {
        alert("Username or email already exists. Please choose a different one.");
        return;
    }

    const newUser = {
        username: newUsername,
        email: newEmail,
        password: newPassword,
        role: role 
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign up successful! You can now login.");
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");
        if (user.role === "admin") {
            window.location.href = "foradmin.html";
        } else {
            window.location.href = "index.html";
        }
    } else {
        alert("Invalid username or password");
    }
}


$(document).ready(function() {
    $("#toggleMenu").click(function() {
        $(".menu").toggleClass("active");
    });

    $("#toggleSignUp").click(function() {
        $("#loginContainer").hide();
        $("#signUpContainer").show();
    });

    $("#toggleLogin").click(function() {
        $("#signUpContainer").hide();
        $("#loginContainer").show();
    });
});
