// Yazmin Alaro 09/16/25
// Learned from https://javascript30.com/CSS + JS Clock

//New: Literlly everything, I somewhat get whats going on in Javascript but not enough to know how to fly solo

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Function to set the date and rotate the second hand

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    minsHand.style.transform = `rotate(${hourDegrees}deg)`;
}
   

setInterval(setDate, 1000);