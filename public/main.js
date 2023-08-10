$( document ).ready(function() {
	console.log('After many many years I am using jQuery again. :D')

	$("#configForm" ).on( "submit", function( event ) {

		// Stop form from submitting normally
		event.preventDefault();
	
		// Get some values from elements on the page:
		const $form = $( this )
		const zelloUser = $form.find( "input[name='zelloUser']" ).val()
		const zelloPassword = $form.find( "input[name='zelloPassword']" ).val()
		const zelloChannel = $form.find( "input[name='zelloChannel']" ).val()
		const zelloIssuerKey = $form.find( "input[name='issuerKey']" ).val()
		
		// Send the data using post
		$.ajax({
			url: '/',
			type: 'POST',
			data: JSON.stringify({
				zelloUser,
				zelloPassword,
				zelloChannel,
				zelloIssuerKey,
			}),
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
		});
	
		// Put the results in a div
		//posting.done(function( data ) {
		//	console.log(data)
		//} );
	} );

	/*
	$( "#target" ).on( "submit", function( event ) {
		alert( "Handler for `submit` called." );
		event.preventDefault();
	});
	*/

	/*
	https://api.jquery.com/jquery.post/

	$.ajax({
		type: "POST",
		url: url,
		data: data,
		success: success,
		dataType: dataType
	});


	$.post( "ajax/test.html", function( data ) {
  		$( ".result" ).html( data );
	});


	$
	*/
});