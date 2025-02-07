document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-timer');
    const timerDisplay = document.getElementById('timer-display');
    const steps = document.querySelectorAll('#recipe-steps li');
    let currentStep = 0;
    let timer;
    const beep = new Audio('beep.mp3'); // Make sure to place a 'beep.mp3' file in the same directory

    function startStep(stepIndex) {
        if (stepIndex >= steps.length) {
            timerDisplay.textContent = "All steps completed!";
            return;
        }
        
        const step = steps[stepIndex];
        const time = parseInt(step.getAttribute('data-time')) * 60; // Convert minutes to seconds
        let remainingTime = time;
        
        timerDisplay.textContent = formatTime(remainingTime);
        timer = setInterval(() => {
            remainingTime--;
            timerDisplay.textContent = formatTime(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(timer);
                beep.play();
                currentStep++;
                startStep(currentStep);
            }
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    startButton.addEventListener('click', () => {
        clearInterval(timer);
        currentStep = 0;
        startStep(currentStep);
    });
});
