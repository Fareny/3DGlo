const timer = (deadLine => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaning = () => {
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let hours = Math.floor((timeRemaining / 60 / 60));
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };

    };
    const updated = () => {
        let getTime = getTimeRemaning();
        timerHours.textContent = returnZero(getTime.hours);
        timerMinutes.textContent = returnZero(getTime.minutes);
        timerSeconds.textContent = returnZero(getTime.seconds);

        if (timerHours.textContent <= 0) {
            clearInterval(inter);
        }
    };
    updated();
    let inter = setInterval(updated, 1000);

    function returnZero(num) {
        return num <= 9 ? '0' + num : num;
    }
});
export default timer;