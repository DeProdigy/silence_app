$(document).ready(function(){
  addEventListeners();
});

function addEventListeners() {
  $("#create-lamb").click(function(){
    createLamb();
  });
};

function createLamb() {
  $.ajax({
    url: '/lamb',
    type: 'post'
  })
  .done(function() {
    console.log('created lamb')
    displyLamb();
  });

};

function displyLamb() {
  // $.ajax({
  //   url: '/lamb',
  //   type: 'get'
}