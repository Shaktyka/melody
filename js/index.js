$(document).ready(function() {
    const maxFloor = 18;
    const minFloor = 2
    const floorPath = $(".home-img path");
    const counterUp = $(".counter-up");
    const counterDown = $(".counter-down");
    const counter = $("counter");

    let currentFloor = 2;

    // Меняет счётчик:
    const changeCounter = (value) => {
        const formattedValue = formatStageValue(value);
        $(".counter").text(formattedValue);
    };
    
    // Подсвечивает текущий этаж:
    const lightCurrentFloor = () => {
        floorPath.removeClass("current-floor");
        $(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
    };

    // Кликнули по кнопке "Вниз":
    function counterDownClickHandler() {
        if (currentFloor > minFloor) {
            currentFloor = +currentFloor - 1;
        }
        changeCounter(currentFloor);
        lightCurrentFloor();
    };

    // Кликнули по кнопке "Вверх":
    function counterUpClickHandler() {
        if (currentFloor < maxFloor) {
            currentFloor = +currentFloor + 1;
        }
        changeCounter(currentFloor);
        lightCurrentFloor();
    };

    // Навели курсор на этаж здания:
    function mouseoverClickHandler() {
        currentFloor = $(this).attr("data-floor");
        lightCurrentFloor();
        changeCounter(currentFloor);
    };

    counterDown.on("click", counterDownClickHandler);
    counterUp.on("click", counterUpClickHandler);
    floorPath.on("mouseover", mouseoverClickHandler);

    // Начальное состояние:
    const start = () => {
        lightCurrentFloor();
    };

    start();
});