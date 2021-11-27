$(document).ready(function() {
  var floorPath = $(".home-img path");
  var modal = $(".modal");
  var closeBtn = $(".btn-close");

  function toggleModal() {
    modal.toggleClass("is-open");
  }

  floorPath.on("click", toggleModal);

  closeBtn.on("click", toggleModal);
});
