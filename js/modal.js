$(document).ready(function() {
  const floorPath = $(".home-img path");
  const modal = $(".modal");
  const modalCounter = $(".modal-counter");
  const closeBtn = $(".btn-close");
  const viewFlatsBtn = $(".view-flats");
  const flatPaths = $(".flats-plan path");
  const descriptionsList = $(".flat-item");

  // Открытие-закрытие модалки
  const toggleModal = () => {
    modal.toggleClass("is-open");
  };

  // Нажатие на этаж:
  function floorPathClickHandler() {
    const stage = $(this).attr("data-floor");
    const formattedStage = formatStageValue(stage); // вернёт отформат-ное значение этажа
    modalCounter.text(formattedStage);
    toggleModal();
  };

  // Нажатие на кнопку "Смотреть квартиры на этаже":
  const viewFlatsBtnClickHandler = (evt) => {
    evt.preventDefault();
    // Взять на этот раз значение из счётчика, оно уже отформатировано:
    const stage = $(".counter").text();
    modalCounter.text(stage);
    toggleModal();
  };

  // Навели курсор на квартиру на этаже:
  function flatPathsMouseoverHandler() {
    const flatNumber = $(this).attr("data-flat");                  // Получает № квартиры
    descriptionsList.removeClass("selected");                     // Удаляет класс выделения с элементов
    $(`[data-flat-descr=${flatNumber}]`).toggleClass("selected"); // Добавляет класс выделения эл-ту
  };

  // Убрали курсор с квартиры на схеме:
  const flatPathsMouseoutHandler = () => {
    $(".flat-item").removeClass("selected");
  };

  // Навели курсор на пункт списка:
  function descriptionsListMouseoverHandler() {
    const flatNumber = $(this).attr("data-flat-descr");
    flatPaths.removeClass("flat-selected");
    $(`[data-flat=${flatNumber}]`).toggleClass("flat-selected");
  };

  // Убрали курсор с пункта списка:
  const descriptionsListMouseoutHandler = () => {
    flatPaths.removeClass("flat-selected");
  };

  // Нажатие на ссылку описания в модалке:
  const descriptionsListClickHandler = (evt) => {
    evt.preventDefault();
  };

  // Обработчики событий:
  floorPath.on("click", floorPathClickHandler);
  closeBtn.on("click", toggleModal);
  viewFlatsBtn.on("click", viewFlatsBtnClickHandler);
  flatPaths.on("mouseover", flatPathsMouseoverHandler);
  flatPaths.on("mouseout", flatPathsMouseoutHandler);
  descriptionsList.on("mouseover", descriptionsListMouseoverHandler);
  descriptionsList.on("mouseout", descriptionsListMouseoutHandler);
  descriptionsList.on("click", descriptionsListClickHandler);
});
