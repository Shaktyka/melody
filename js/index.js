$(document).ready(function() {
    var maxFloor = 18;
    var minFloor = 2
    var currentFloor = 2;
    var currFloorText = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    $(".home-img path").on("mouseover", function() {
        currentFloor = $(this).attr('data-floor');
        currFloorText = currentFloor < 10 ? `0${currentFloor}` : currentFloor;
        $(".counter").text(currFloorText);
    });

    counterUp.on("click", function() {
        if (currentFloor < maxFloor) {
            currentFloor += 1;
            currFloorText = currentFloor < 10 ? `0${currentFloor}` : currentFloor;
            $(".counter").text(currFloorText);
            $(".home-img path").removeClass('current-floor');
            $(`[data-floor=${currentFloor}]`).toggleClass('current-floor');
        }
    });
});