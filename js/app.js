function wait(ms) {
		var d = new Date();
		var d2 = null;
		do { d2 = new Date(); }
		while(d2-d < ms);
	}

$('button').on('click', (e) => {
	e.preventDefault();
	const $villageName = $('#villageInput').val();
	console.log(`${$villageName}!`);
	$('#villageInput').remove();
	$('#submit-btn').remove();
	$('.inputs').append(`${$villageName}!`);
	$('#location h2').text('Long live');
	
	wait (2000);
	$('.environment h2').text('Click your Environment');
	
	$('.pics_in_a_row').css('display', 'flex');

});

$('.pics_in_a_row').on('click', (e) =>{
	e.preventDefault();
	const $playerEnvironment = $(e.target).attr('id');
	console.log($playerEnvironment);
	$('.environment h2').text(`You picked ${$playerEnvironment}`);
	$('.disasterPics').css('display', 'flex');
	wait (3000);

});











