
$(function () {
    for (let i = 0; i < 9; i++) {
        var time = localStorage.getItem("hour-" + (i + 9))
        if (!time) continue;
        $('#hour-' + (i + 9) + ' .description').val(time);
    }
});

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var description = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        console.log(description);
        console.log(time);
        localStorage.setItem(time, description);
    });

    $('.time-block').each(function () {
        var now = dayjs().hour();
        var calendarHour = parseInt($(this).attr('id').split('-')[1]);
        console.log(calendarHour)
        if (now < calendarHour) {
            $(this).addClass('past');
        } else if (now === calendarHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
    // if(now.dayjs().hour())
});

