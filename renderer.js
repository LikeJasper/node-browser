var $ = require('jquery');

$('#search-form').on('submit', function(e) {
  e.preventDefault();
  var url = $('#urlinput').val();
  $('.tab.active').text(url);
  $('.view.active').attr('src', url);
});
