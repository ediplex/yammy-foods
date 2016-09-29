  $(function(){
    var activeCls = "event-tabs-menu-item__active";
    var tabMenuItems = $(".event-tabs-menu-item");
    $(".event-tabs-menu-item__link").on("click", function(ev) {
        ev.preventDefault();
        tabMenuItems.removeClass(activeCls);
        var $this = $(this);
        $this.parent('.event-tabs-menu-item').addClass(activeCls);
        var tab = $($this.attr("href"));
        if (!tab.is(':visible')) {
          $(".event-tab").hide();
          tab.fadeToggle();
        }
    });
    return false;
});
