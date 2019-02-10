// Your code goes here
var login = prompt("Login:");
if (login === "" || login === null) {
    alert("Canceled");
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (login === "User" || login === "Admin") {
    var password = prompt("Enter password:");
    var time = new Date().getHours();
} else {
    alert("I don't know you");
}
if (password === "" || password === null) {
    alert("Canceled");
} else if (login === "User" && password === "UserPass") {
    if (time < 20) {
        alert("Good day, dear User!");
    } else {
        alert("Good evening, dear User!");
    }
} else if (login === "Admin" && password === "RootPass") {
    if (time < 20) {
        alert("Good day, dear Admin!");
    } else {
        alert("Good evening, dear Admin!");
    }
} else {
    alert("Wrong password");
}