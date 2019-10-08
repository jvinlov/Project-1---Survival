function wait(ms) {
		var d = new Date();
		var d2 = null;
		do { d2 = new Date(); }
		while(d2-d < ms);
	};

let $continu = $('<button type="submit" id="continue-btn">Continue...</button>')

let villageName;

let $playerPicture;

$('button').on('click', (e) => {
	e.preventDefault();
	villageName = $('#villageInput').val();
	
	$('#villageInput').remove();
	$('#submit-btn').remove();
	$('.inputs').append(`${villageName}!`);
	$('#location h2').text('Long live');
	
	wait (100);
	$('.environment h2').text('Click your Environment');
	
	$('.pics_in_a_row').css('display', 'flex');

});

$('.pics_in_a_row').on('click', (e) =>{
	e.preventDefault();
	const $playerEnvironment = $(e.target).attr('id');
	const $playerPicture = $(e.target).attr('src');
	const villagePicture = $('<img>').attr('src', $playerPicture);
	
	$('.environment h2').text(`You picked ${$playerEnvironment}`);
	$('.disasterPics').css('display', 'flex');
	$continu.on('click', (e) => {
		e.preventDefault();
		console.log('yes');
		$('.grid-container1').css('display', 'none');
		$('.grid-container2').css('display', 'grid');
		$('#playerVillage h3').text(villageName);
		$('#playerVillage').css({'background-image' :`url(${$playerPicture})`, 'background-size': 'cover'});

	});
	$('#disasters h2').append($continu)
	wait (500);


});




const village = {

	
		population: 20,
		hut: 2,
		hiRise: 0,
		credits: 200,
		score: 40,

		gamePlay () {
			$('#gamePop').text(`Population: ${this.population}`);
			$('#gameHuts').text(`Huts: ${this.hut}`);
			$('#gameHiRise').text(`High Rises: ${this.hiRise}`);
			$('#gameCredits').text(`Credits: ${this.credits}`);
			$('#gameScore').text(`Score: ${this.score}`);
		
		},

		addHut () {
			$('#hut-btn').on('click', (e) => {

				if (this.credits<20) {
					alert("Insufficient funds!");
					return;
				}
				
				this.hut ++;
				this.credits -=20;
				this.score +=10;
				this.population +=5;
				$('#gameHuts').text(`Huts: ${this.hut}`);
				$('#gameCredits').text(`Credits: ${this.credits}`);
				$('#gameScore').text(`Score: ${this.score}`);
				$('#gamePop').text(`Population: ${this.population}`);
				$('#playerVillage').append('')
	
		
				});

			},

		addHiRise () {
			$('#hiRise-btn').on('click', (e) => {

				if (this.credits<100) {
					alert("Insufficient funds!");
					return;
				}

				this.hiRise ++;
				this.credits -=80;
				this.score +=30;
				this.population +=20;
				$('#gameHiRise').text(`High Rises: ${this.hiRise}`);
				$('#gameCredits').text(`Credits: ${this.credits}`);
				$('#gameScore').text(`Score: ${this.score}`);
				$('#gamePop').text(`Population: ${this.population}`);




			});
			
		}


	}

	




village.gamePlay();
village.addHut();
village.addHiRise();


class Building {

	constructor (score, population, cost, buildTime) {

	this.score = score;
	this.population = population;
	this.cost = cost;
	this.buildTime = buildTime;

	}
};

const hiRise = new Building(30, 20, 100, 3000);
console.log(hiRise);

const hut = new Building(10, 5, 20, 1000);
console.log(hut);


const build =  {


	

}
















