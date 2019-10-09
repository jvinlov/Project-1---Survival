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
		$('.grid-container1').css('display', 'none');
		$('.grid-container2').css('display', 'grid');
		$('#playerVillage h3').text(villageName);
		$('#playerVillage').css({'background-image' :`url(${$playerPicture})`, 'background-size': 'cover'});

	});
	$('#disasters h2').append($continu)
	wait (500);


});
let buildHutInterval;
let buildHiRiseInterval;

$('#create-btn').on('click', (e) => {
	e.preventDefault();
	$('#create-btn').remove();
	$('#build p').text("When will the disaster hit?");
	$('.gameButton').attr('disabled', false);

	const generateDisaster = (arg) => {
	
	const rnd= Math.floor(Math.random() * disaster.length)
	const rndDis = disaster[rnd];
	console.log(rndDis);
}
	generateDisaster();

		const rand = (Math.round(Math.random()* 60000)+ 30000);
		console.log(rand);


		const interval = setInterval(() => { 
		
			// if rand seconds, then clear buildHut Interval

			// if( =rand) {


			// }


		}, (rand) ) 

})


// once the timer runs out:

// animate disaster over background
// total score (show calculations?) - 
	// (x) disaster did (x) population damage
				// (x) hut damage
			   	// (x) hiRise damage
// on continue button
	// go to third screen
		 // show player 1 total score: pop + huts + hiRise + credits
		 // start player 2 (loop back to start)




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
				

				buildHutInterval = setInterval(()=>{

					// if 15 seconds, then append hut and clear interval


					const hutPicture1 = $('<img>').attr('src', 'images/hutSized.png');
					$('#playerVillage').append(hutPicture1);
					clearInterval(buildHutInterval);

				}, 15000)
	
		
				});

			},

		addHiRise () {
			$('#hiRise-btn').on('click', (e) => {

				if (this.credits<80) {
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
				const hiRisePicture1 = $('<img>').attr('src', 'images/hiRiseSized.jpg');

				buildHiRiseInterval = setInterval(()=>{

					// if 15 seconds, then append hiRise and clear interval


				
					$('#playerVillage').append(hiRisePicture1);
					clearInterval(buildHiRiseInterval);

				}, 15000)

			



			});
			
		},

		damage() {
			


	},


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


const hut = new Building(10, 5, 20, 1000);


const disaster = [
	{
		name: "Fire",
		popDam: 10,
		hutDam: 3,
		hiRiseDam: 1

	},	{
		name: "Tsuanmi",
		popDam: 40,
		hutDam: 3,
		hiRiseDam: 2

	},	{
		name: "Volcano",
		popDam: 30,
		hutDam: 5,
		hiRiseDam: 2

	},	{
		name: "Tornado",
		popDam: 10,
		hutDam: 2,
		hiRiseDam: 0,

	}
	
]




	














