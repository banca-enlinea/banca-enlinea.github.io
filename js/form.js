 (function() {
 var $form = $('form#contact-form'), url = 'https://script.google.com/macros/s/AKfycbz2yuWrZGcVypyZ1BD7pAlxAwOYvyaurab249gpZIFNZP2zxL-el4ZBOBkxBbyeO5VtnA/exec';
 $('#submit-contact-form').on('click', function(e) {
 e.preventDefault();
 var jqxhr = $.ajax({
 url: url,
 method: "GET",
 dataType: "json",
 data: $form.serializeObject(),
 success: function(data) {
 console.log(data);
 $('form#contact-form').hide();
 $('body').append("<p style='color:green'>Gracias por tu interés. Contactaremos contigo en breve.</p>");
 }
 });
 });
 })();
