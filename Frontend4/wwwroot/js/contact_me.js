// Contact Form Scripts

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
	return '';
}

$(function() {

	$(".contact-form input, .contact-form textarea").jqBootstrapValidation({
		preventSubmit: true,
		submitError: function($form, event, errors) {
			
			// additional error messages or events
		},
		submitSuccess: function($form, event) {
			event.preventDefault(); // prevent default submit behaviour
			// get values from FORM
			
			var type = $form.find("input[name=type]").val();
			var name = $form.find("input[name=name]").val();
			var email = $form.find("input[name=email]").val();
			var phone = $form.find("input[name=phone]").val();
			var message = $form.find("textarea[name=message]").val();
			var params = window.location.search.substring(1);
            
			var firstName = name; // For Success/Failure Message
			// Check for white space in name for Success/Fail message
			if (firstName.indexOf(' ') >= 0) {
				firstName = name.split(' ').slice(0, -1).join(' ');
			}
			$.ajax({
				url: "mail/contact_me.php",
				type: "POST",
				data: {
					type: type,
					name: name,
					phone: phone,
					email: email,
					message: message,
					params: params,
				},
				cache: false,
				success: function() {
					
					// Success message
					$form.find('.result').html("<div class='alert alert-success'>");
					$form.find('.result > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
						.append("</button>");
					$form.find('.result > .alert-success')
						.append("<strong>Спасибо! Ваше сообщение успешно отправлено! </strong>");
					$form.find('.result > .alert-success')
						.append('</div>');

					//clear all fields
					$form.trigger("reset");
				},
				error: function() {
					
					// Fail message
					$form.find('.result').html("<div class='alert alert-danger'>");
					$form.find('.result > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
						.append("</button>");
					$form.find('.result > .alert-danger').append("<strong>Извините, " + firstName + ", почтовый сервер временно недоступен. Пожалуйста, попробуйте позже!");
					$form.find('.result > .alert-danger').append('</div>');
					//clear all fields
					//$form.trigger("reset");
				},
			});
		},
		filter: function() {
			return $(this).is(":visible");
		},
	});

	$("a[data-toggle=\"tab\"]").click(function(e) {
		e.preventDefault();
		$(this).tab("show");
	});
});


/*When clicking on Full hide fail/success boxes */
$('#').focus(function() {
	$('.result').html('');
});
