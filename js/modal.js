$(document).ready(function() {
  var floorPath = $(".home-img path");
  var modal = $(".modal");
  var modalCounter = $(".modal-counter");
  var closeBtn = $(".btn-close");
  var viewFlatsBtn = $(".view-flats");
  var flatPaths = $(".flats-plan path");
  var descriptionsList = $(".flat-item");

  // Открытие-закрытие модалки
  function toggleModal() {
    modal.toggleClass("is-open");
  }

  // Форматирует значение этажа
  function formatStageValue(stageNum) {
    return stageNum < 10 ? `0${stageNum}` : stageNum;
  };

  // Нажатие на этаж
  function floorPathClickHandler() {
    var stage = $(this).attr('data-floor');
    var formattedStage = formatStageValue(stage); // вернёт отформат-ное значение этажа
    modalCounter.text(formattedStage);
    toggleModal();
  };

  // Нажатие на кнопку "Смотреть квартиры на этаже"
  function viewFlatsBtnClickHandler() {
    // Взять на этот раз значение из счётчика, оно уже отформатировано
    var stage = $(".counter").text();
    modalCounter.text(stage);
    toggleModal();
  };

  // Навели курсор на квартиру на этаже:
  function flatPathsMouseoverHandler() {
    var flatNumber = $(this).attr('data-flat');                  // Получает № квартиры
    descriptionsList.removeClass("selected");                     // Удаляет класс выделения с элементов
    $(`[data-flat-descr=${flatNumber}]`).toggleClass("selected"); // Добавляет класс выделения эл-ту
  };

  // Убрали курсор с квартиры на схеме
  function flatPathsMouseoutHandler() {
    $(".flat-item").removeClass("selected");
  };

  // Навели курсор на пункт списка
  function descriptionsListMouseoverHandler() {
    var flatNumber = $(this).attr('data-flat-descr');
    flatPaths.removeClass("flat-selected");
    $(`[data-flat=${flatNumber}]`).toggleClass("flat-selected");
  };

  // Убрали курсор с пункта списка
  function descriptionsListMouseoutHandler() {
    flatPaths.removeClass("flat-selected");
  };

  // Обработчики событий
  floorPath.on("click", floorPathClickHandler);
  closeBtn.on("click", toggleModal);
  viewFlatsBtn.on("click", viewFlatsBtnClickHandler);
  flatPaths.on("mouseover", flatPathsMouseoverHandler);
  flatPaths.on("mouseout", flatPathsMouseoutHandler);
  descriptionsList.on("mouseover", descriptionsListMouseoverHandler);
  descriptionsList.on("mouseout", descriptionsListMouseoutHandler);
});
