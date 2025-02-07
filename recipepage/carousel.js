document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const prevButtons = document.querySelectorAll('.prev-button');
    const nextButtons = document.querySelectorAll('.next-button');
    const timerButtons = document.querySelectorAll('.timer-button');
    const timerDisplays = document.querySelectorAll('.timer-display');
    const beep = new Audio('beep.mp3'); // Make sure to place a 'beep.mp3' file in the same directory
    let currentIndex = 0;
    let timer;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function startTimer(stepIndex) {
        const item = items[stepIndex];
        const time = parseInt(item.getAttribute('data-time')) * 60; // Convert minutes to seconds
        let remainingTime = time;
        
        const timerDisplay = item.querySelector('.timer-display');
        timerDisplay.textContent = formatTime(remainingTime);
        
        clearInterval(timer);
        timer = setInterval(() => {
            remainingTime--;
            timerDisplay.textContent = formatTime(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(timer);
                beep.play();
            }
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }


    function speakText(text) {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }

    items.forEach(item => {
        const paragraph = item.querySelector('p');
        paragraph.addEventListener('mouseenter', () => {
          speakText(paragraph.textContent);
        });
      });

    
    prevButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            showItem(currentIndex);
        });
    });

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            showItem(currentIndex);
        });
    });

    timerButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            startTimer(index);
        });
    });

    // Initialize the carousel by showing the first item
    showItem(currentIndex);
});
