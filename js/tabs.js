  $(function(){
      $("#event-tabs-menu li a").on("click", function() {
          $("#event-list__tab-boxes　div").hide();
          $($(this).attr("href")).fadeToggle();
      });
      return false;
  });
