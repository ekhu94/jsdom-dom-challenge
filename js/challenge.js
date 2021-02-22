const minusBtn = document.querySelector('button#minus')
const plusBtn = document.querySelector('button#plus');
const heartBtn = document.querySelector('button#heart');
const pauseBtn = document.querySelector('button#pause');
const likesList = document.querySelector('ul.likes');
const likesCounter = {};
const timeDisplay = document.querySelector('h1#counter');

const listMsg = (time, clicks) => {
    if (clicks === 1) {
        return `${time} has been liked ${clicks} time`;
    } else {
        return `${time} has been liked ${clicks} times`;
    }
}

window.setInterval(() => {
    let sec = parseInt(timeDisplay.innerText);
    timeDisplay.innerText = `${sec + 1}`;
}, 1000);

minusBtn.addEventListener('click', () => {
    let sec = parseInt(timeDisplay.innerText);
    timeDisplay.innerText = `${sec - 1}`;
})

plusBtn.addEventListener('click', () => {
    let sec = parseInt(timeDisplay.innerText);
    timeDisplay.innerText = `${sec + 1}`;
})

heartBtn.addEventListener('click', () => {
    let sec = parseInt(timeDisplay.innerText);
    if (likesCounter[sec]) {
        likesCounter[sec]++;
        let li = likesList.lastChild;
        li.innerText = listMsg(sec, likesCounter[sec]);
    } else {
        likesCounter[sec] = 1;
        let li = document.createElement('li');
        likesList.appendChild(li);
        li.innerText = listMsg(sec, likesCounter[sec]);
    }
})