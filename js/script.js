$(document).ready(function() {

	$('#requestType').change(function() {
		var selection = $( "#requestType" ).val();

		$('#' + selection).css('display', 'block');
		console.log(selection)
	})
})