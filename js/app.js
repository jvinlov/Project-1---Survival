$('button').on('click', (e) => {
	e.preventDefault();
	const $villageName = $('#villageInput').val();
	console.log($villageName);
	$('#villageInput').remove();
	$('#submit-btn').remove();
	$('.inputs').append($villageName);
	$('#location h2').text('Long live');
	$('.environment h2').text('Click your Environment');

});

$('.pics_in_a_row').on('click', (e) =>{
	e.preventDefault();
	const $playerEnvironment = $(e.target).attr('id');
	console.log($playerEnvironment);
	$('.environment h2').text(`You picked ${$playerEnvironment}`);

});










