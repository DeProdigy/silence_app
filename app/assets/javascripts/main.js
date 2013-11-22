$(document).ready(function(){
  addEventListeners();
});

function addEventListeners() {
  $("#create-lamb").on("click", function() {
    createLamb();
  });
}

function createLamb() {
  $.ajax({
    url: '/lambs',
    type: 'post'
  })
  .done(function(data) {
    console.log('created lamb');
    displayLambs();
  });
}

function displayLambs() {
  $.ajax({
    url: '/lambs',
    type: 'get'
  })
  .done(function(data) {
    console.log(data);
    var $div = $("#lamb-holder");
    $div.empty();
    for (var i = 0; i < data.length; i++) {
      var $li = $("<li class=lambs> Lamb " + i + " Silent? " + data[i].is_silent + "</li>");
      $li.appendTo($div);
    }
  });

  $("li").on("click", '.lambs', function() {
    alert('yo');
  });
}

function updateLamb() {
  alert('yo');
}

