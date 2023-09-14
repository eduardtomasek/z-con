$( document ).ready(function() {
	let timer = null
	console.log('After many many years I am using jQuery again. :D')

	function restoreSaveButton () {
		$('#saveButton').removeClass('saved')
		$('#saveButton').prop('value', 'Save')
	}

	$("#configForm" ).on( "submit", function( event ) {

		// Stop form from submitting normally
		event.preventDefault();
	
		// Get some values from elements on the page:
		const $form = $( this )
		const zelloUser = $form.find( "input[name='zelloUser']" ).val()
		const zelloPassword = $form.find( "input[name='zelloPassword']" ).val()
		const zelloChannel = $form.find( "input[name='zelloChannel']" ).val()
		const zelloIssuerKey = $form.find( "input[name='issuerKey']" ).val()
		const zelloSecretKey = $form.find( "textarea[name='zelloSecretKey']" ).val()
		const rtlFmPrompt = $form.find( "textarea[name='rtlFmPrompt']" ).val()
		
		// Send the data using post
		$.ajax({
			url: '/save-files',
			type: 'POST',
			data: JSON.stringify({
				zelloUser,
				zelloPassword,
				zelloChannel,
				zelloIssuerKey,
				zelloSecretKey,
				rtlFmPrompt,
			}),
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			success: function (data) {
				$('#saveButton').addClass('saved')
				$('#saveButton').prop('value', 'SAVED')

				timer = setTimeout(function () {
					restoreSaveButton()
					clearTimeout(timer)
				}, 1500)
			}
		});
	} );
});