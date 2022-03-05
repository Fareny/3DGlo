const timer = () => {
    let date = new Date();
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        day = days[date.getDay()];

    let getHour = date.getHours();
    let week;
    if (getHour >= 4 && getHour <= 12) {
        week = '<b>' + 'Доброе утро' + '</b>';
    } else if (getHour >= 12 && getHour <= 16) {
        week = '<b>' + 'Добрый день' + '</b>';
    } else if (getHour >= 16 && getHour <= 0) {
        week = '<b>Добрый вечер</b>';
    } else if (getHour >= 0 && getHour <= 4) {
        week = '<b>Доброй ночи</b>';
    }
    let nextDate = new Date("January 1, 2023");
    let msPerDay = 24 * 60 * 60 * 1000;
    let daysLeft = Math.round((nextDate.getTime() - date.getTime()) / msPerDay);
    let left = '<b>До нового года осталось ' + daysLeft + ' дней</b>';
    date.toLocaleTimeString('en');
    let dayWeek = 'Сегодня: ' + day;
    let timeNow = '<b>Текущее время: ' + date.toLocaleTimeString('en') + '</b>';
    document.body.innerHTML = '<b>' + week + '<br>' + dayWeek + '</br>' + timeNow + '<br>' + left;
};
setInterval(timer, 1000);