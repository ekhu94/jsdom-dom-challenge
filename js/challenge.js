const minusBtn = document.querySelector('button#minus')
const plusBtn = document.querySelector('button#plus');
const heartBtn = document.querySelector('button#heart');
const pauseBtn = document.querySelector('button#pause');
const likesList = document.querySelector('ul.likes');
const likesCounter = {};
const timeDisplay = document.querySelector('h1#counter');
const commentsList = document.querySelector('div#list');
const formBtn = document.querySelector('button#submit');
let reset = false;

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

pauseBtn.addEventListener('click', () => {
    if (!reset) {
        pauseBtn.innerText = 'resume';
        stopTimer();
        document.querySelectorAll('.normal-btn').forEach(btn => {
            btn.disabled = true;
        });
        reset = true;
    } else {
        pauseBtn.innerText = 'pause';
        // do you want a reset or not?!!
        // timeDisplay.innerText = '0';
        startTimer = setInterval(() => {
            timer();
        }, 1000);
        document.querySelectorAll('.normal-btn').forEach(btn => {
            btn.disabled = false;
        });
        reset = false;
    }
})

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let comment = document.createElement('p');
    comment.innerText = document.querySelector('#comment-input').value;
    commentsList.appendChild(comment);

})

const listMsg = (time, clicks) => {
    if (clicks === 1) {
        return `${time} has been liked ${clicks} time`;
    } else {
        return `${time} has been liked ${clicks} times`;
    }
}

const timer = () => {
    let sec = parseInt(timeDisplay.innerText);
    timeDisplay.innerText = `${sec + 1}`;
}

let startTimer = setInterval(() => {
    timer();
}, 1000);

const stopTimer = () => {
    clearInterval(startTimer);
}

