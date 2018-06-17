var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbypvREwqv05lAbqzemFVdY7Q5hqf9Ir3AeeXievo3gxjGfJIfQW/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
