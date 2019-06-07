(function(){
    function formatTime(time){
        var timeSplit = time.split(":"),
            timeHours = timeSplit[0];
 
        timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
 
        return timeHours + timeSplit[1];
    }
 
    var currentDate = new Date(),
            weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            currentDay = weekday[currentDate.getDay()],
            currentTimeHours = currentDate.getHours(),
            currentTimeMinutes,
            timeNow,
            currentDaySelector,
            openTimes,
            closeTimes,
            isOpen = false;
 
    currentTimeHours = currentTimeHours < 10 ? "0" + currentTimeHours : currentTimeHours;
    currentTimeMinutes = currentDate.getMinutes();
    timeNow = currentTimeHours + "" + currentTimeMinutes;
 
    currentDaySelector = ".Day--" + currentDay; //gets today's weekday and turns it into id
    $(currentDaySelector).toggleClass("Day--Today"); //hightlights today
 
    openTimes = $(currentDaySelector).children('.opens').map(function(){
        return $.trim($(this).text());
    }).get();
 
    closeTimes = $(currentDaySelector).children('.closes').map(function(){
        return $.trim($(this).text());
    }).get();
 
    $(openTimes).each(function(key, value) {
        var openTimeFormatted = formatTime(openTimes[key]),
                closeTimeFormatted = formatTime(closeTimes[key]);
 
        if(timeNow >= openTimeFormatted && timeNow <= closeTimeFormatted) {
            isOpen = true;
        }
    });
 
    if (isOpen) {
        $(".OpeningHours__Status").toggleClass("OpeningHours__Status--Open");
    } else {
        $(".OpeningHours__Status").toggleClass("OpeningHours__Status--Closed");
    }
})();