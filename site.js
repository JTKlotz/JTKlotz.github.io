
//console.log("JavaScript is linked properly!");

//variable storing the welcome div
const welcome = document.querySelector('#welcome')
//variable to create an h2 element
const heading2 = document.createElement('h2')
//append the h2 element to the welcome div
welcome.append(heading2)

//variable storing the current hour of the day
const hours = new Date().getHours();

//boolean variables to determine time of day
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


//conditional to set the text content of the h2 element based on time of day
if (isMorning) { heading2.textContent = 'Good Morning!' }
else if (isAfternoon) { heading2.textContent = 'Good Afternoon!' }
else if (isEvening) { heading2.textContent = 'Good Evening!'}

//variable storing a secret key
const key = "It's a secret to everybody."

const secretMessage = 'I have enjoyed learning JavaScript so far this semester. I think you are a great teacher and I enjoy some of the comments/jokes you make during the lectures. You definitely make the class more interesting and fun. As for the key, are you referencing zelda?'

localStorage.setItem(key, secretMessage)