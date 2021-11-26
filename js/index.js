$(document).ready(function() {
    var maxFloor = 18;
    var minFloor = 2
    var floorPath = $(".home-img path");
    var currentFloor = 2;
    var currFloorView = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");

    // Сделать подсветку этажа на старте и когда убирается курсор от здания
    // $(`[data-floor=${currentFloor}]`).toggleClass('current-floor');

    floorPath.on("mouseover", function() {
        floorPath.removeClass('current-floor');
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
            floorPath.removeClass('current-floor');
            $(`[data-floor=${currentFloor}]`).toggleClass('current-floor');
        }
    });

    // Обработка клика по кнопке "Вниз"
    counterDown.on("click", function() {
        if (currentFloor > minFloor) {
            currentFloor -= 1;
            currFloorView = currentFloor < 10 ? `0${currentFloor}` : currentFloor;
            $(".counter").text(currFloorView);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${currentFloor}]`).toggleClass('current-floor');
        }
    });
});