function() {
var $form = $('form#formulario'), url = 'https://script.google.com/macros/s/AKfycbwm_9DhC9z_hLLUCpwEilSOTEzE8SHr4WJfDZYAt-f0-xC4ZJZF8D-bZ055tOqfqIzPqw/exec';
$('#submit-contact-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: $form.serializeObject(),
success: function(data) {
console.log(data);
$('form#formulario').hide();
$('body').append("<p style='color:green'>Gracias por tu interés. Contactaremos contigo en breve.</p>");
}
});
});
}
