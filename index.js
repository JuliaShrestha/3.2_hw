"use strict"
const userName = prompt("Enter your name");
const userAge = prompt("Enter your age");
const userEmail = prompt("Enter your email");

if (!userName) {
    console.log('Your name is not entered');
}

if (!userAge || isNaN(userAge)) {
    console.log('Your age is not entered');
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       
if (!userEmail || !emailPattern.test(userEmail)) {
    console.log("The format is incorrect");
}

const userInfo = [userName, userAge, userEmail];

userInfo.sort(() => Math.random() -0.5);

console.log(`${userInfo[0]} ${userInfo[1]} ${userInfo[2]}`);