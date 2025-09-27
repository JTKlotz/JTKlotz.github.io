
const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

setInterval(() => {
    currentImage++
    showImages()
}, 5000)

prevButton.addEventListener('click', () => {
    currentImage--
    showImages()
})

nextButton.addEventListener('click', () => {
    currentImage++
    showImages()
})

showImages()


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