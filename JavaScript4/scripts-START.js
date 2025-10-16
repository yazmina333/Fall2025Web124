// Yazmin Alfaro 10/15/25 
// Learned from https://javascript30.com/Countdown Clock 
// Added Background Variables and Preloading with Callbacks
// Crossfade layers to prevent flash on background change
// Default background handling
// Preloading images using callbacks

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const background = document.querySelectorAll('[data-bg]');
const assets = "Assets/";

// Create two background layers for crossfade
const bgA = document.createElement('div');
const bgB = document.createElement('div');
bgA.className = 'bg-layer';
bgB.className = 'bg-layer is-hidden';
document.body.prepend(bgB);
document.body.prepend(bgA);

let activeLayer = bgA; // track which layer is visible
let defaultBgUrl = 'Assets/Dia_unsplash.jpg';

// Simple preloader using callbacks
function preloadImage(src, onLoad, onError) {
    if (!src) {
        if (onError) onError();
        return;
    }
    const img = new Image();
    const cleanup = () => {
        img.onload = null;
        img.onerror = null;
    };
    img.onload = function() {
        cleanup();
        if (onLoad) onLoad(src);
    };
    img.onerror = function() {
        cleanup();
        if (onError) onError();
    };
    img.src = src;
    // If already cached, onload may not fire; handle synchronously
    if (img.complete) {
        cleanup();
        if (onLoad) onLoad(src);
    }
}

function timer(seconds) {
    //clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) { 
    const minutes = Math.floor (seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) { 
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
        const bg = this.dataset.bg;
        // If a button lacks data-bg, fall back to the default page background
        const nextUrl = bg ? `${assets}${bg}` : defaultBgUrl;
        if (!nextUrl) return; // nothing to do if we couldn't determine a default
        // Preload next image, then crossfade layers to avoid flash
        preloadImage(nextUrl, function() {
            const nextLayer = activeLayer === bgA ? bgB : bgA;
            nextLayer.style.backgroundImage = `url(${nextUrl})`;
            // Show next layer, hide current
            nextLayer.classList.remove('is-hidden');
            activeLayer.classList.add('is-hidden');
            activeLayer = nextLayer;
        }, function() {
            // Fallback: direct set on body (may flash if load fails)
            document.body.style.backgroundImage = `url(${nextUrl})`;
        });
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});

// Initialize default background into first layer from computed style or CSS
(() => {
    // Try to read the html background-image set in CSS to seed bgA, else keep empty
    const computed = getComputedStyle(document.documentElement);
    const cssBg = computed.backgroundImage && computed.backgroundImage !== 'none' ? computed.backgroundImage : '';
    if (cssBg) {
        // backgroundImage returns like url("path"), we can assign as-is
        bgA.style.backgroundImage = cssBg;
        // Extract raw URL from css url("...") for later use
        const match = cssBg.match(/^url\((?:\"|')?(.*?)(?:\"|')?\)$/);
        if (match && match[1]) {
            defaultBgUrl = match[1];
        }
    }
    // Preload all images referenced by buttons
    document.querySelectorAll('[data-bg]').forEach(btn => {
        const bg = btn.getAttribute('data-bg');
        if (bg) preloadImage(`${assets}${bg}`);
    });
    // Ensure default gets cached too (usually already by CSS, but safe)
    if (defaultBgUrl) preloadImage(defaultBgUrl);
})();
