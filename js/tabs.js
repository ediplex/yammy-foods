  $(function(){
      $(".event-tabs-menu-item__link").on("click", function(ev) {
          ev.preventDefault();
          var tab = $($(this).attr("href"));
          if (!tab.is(':visible')) {
            $(".event-tab").hide();
            tab.fadeToggle();
          }
      });
      return false;
  });
