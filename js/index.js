$(document).ready(function() {
    var maxFloor = 18;
    var minFloor = 2
    var currentFloor = 2;
    var currFloorView = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");

    $(".home-img path").on("mouseover", function() {
        currentFloor = $(this).attr('data-floor');
        currFloorView = currentFloor < 10 ? `0${currentFloor}` : currentFloor;
        $(".counter").text(currFloorView);
    });

    // Обработка клика по кнопке "Вверх"
    // Автор использует ф-цию toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false})
    counterUp.on("click", function() {
        if (currentFloor < maxFloor) {
            currentFloor += 1;
            currFloorView = currentFloor < 10 ? `0${currentFloor}` : currentFloor;
            $(".counter").text(currFloorView);
            $(".home-img path").removeClass('current-floor');
            $(`[data-floor=${currentFloor}]`).toggleClass('current-floor');
        }
    });
});