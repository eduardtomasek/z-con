$( document ).ready(function() {
	console.log('After many many years I am using jQuery again. :D')

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


	$( "#searchForm" ).on( "submit", function( event ) {

	// Stop form from submitting normally
	event.preventDefault();

	// Get some values from elements on the page:
	var $form = $( this ),
		term = $form.find( "input[name='s']" ).val(),
		url = $form.attr( "action" );

	// Send the data using post
	var posting = $.post( url, { s: term } );

	// Put the results in a div
	posting.done(function( data ) {
		var content = $( data ).find( "#content" );
		$( "#result" ).empty().append( content );
  		} );
	} );
	*/
});