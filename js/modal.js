$(document).ready(function() {
  var floorPath = $(".home-img path");
  var modal = $(".modal");
  var modalCounter = $(".modal-counter");
  var closeBtn = $(".btn-close");
  var viewFlatsBtn = $(".view-flats");

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

  // Обработчики событий
  floorPath.on("click", floorPathClickHandler);
  closeBtn.on("click", toggleModal);
  viewFlatsBtn.on("click", viewFlatsBtnClickHandler);
});
