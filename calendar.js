function renderCalendar() {
   createDays();
   printDayOfMonth(5, 20);
}

function createDays() {
    var day = 1;
    for(var week = 1; week <= 4; week++) {
        for(; day <= week * 7; day++) {
            var daySquare = document.createElement('div');
            daySquare.className = (day % 7 == 0 || (day-1) % 7 == 0) ? 'square weekend-day' : 'square';
            document.getElementById('week' + week).appendChild(daySquare);

            var dayContent = document.createElement('div');
            dayContent.id = 'pos' + day;
            dayContent.className = 'content';
            daySquare.appendChild(dayContent);
        }
    }
}

function printDayOfMonth(initialDate, endDate) {
    for (var i = initialDate; i <= endDate; i++) {
        document.getElementById('pos' + i).innerHTML = i;
    }
}