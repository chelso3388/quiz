$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input#age").val());

    if (height >= 25) {
      $('#under').hide();
      $('#over').show();
    } else {
      $('#over').hide();
      $('#under').show();
  }
  });
});

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var books = $("input:radio[name=books]:checked").val();

    if (books === "fantasy") {
      $("#mystery").hide();
      $("comic").hide();
      $("#fantasy").show();
    } else if (books === "mystery") {
      $("#fantasy").hide();
      $("#comic").hide();
      $("#mystery").show();
    } else {
      $("#fantasy").hide();
      $("#mystery").hide();
      $("#comic").show();
    }
  });
});
