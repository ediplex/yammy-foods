/**
 * Main JS
 */
(function(window) {

  console.log('initialized');

  function onReady() {
    var titleWidth = $('.decorated-title__text').width();
    $('.decorated-title__decoration-wrap').width(titleWidth);
  }

  $(onReady);

})(window);
