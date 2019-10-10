function wait(ms) {
		var d = new Date();
		var d2 = null;
		do { d2 = new Date(); }
		while(d2-d < ms);
	};

let $continu = $('<button type="submit" id="continue-btn">Continue...</button>')

let villageName;

let $playerPicture;
let $disasterPicture;

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
	let finalDisaster;
	let rndDis;
	let finalScore;

	const generateDisaster = (arg) => {
	
		const rnd= Math.floor(Math.random() * disaster.length);
		rndDis = disaster[rnd];
		finalDisaster = $('<img>').attr('src', rndDis.picture);
			}
	

	const applyDamage = (arg) => {	

			village.population -= rndDis.popDam;
						if (village.population < 0) {
							village.population = 0;
						}

			village.hiRise -=rndDis.hiRiseDam;
						if(village.hiRise < 0) {
							village.hiRise = 0;
						}
			village.hut -= rndDis.hutDam;
						if (village.hut < 0) {
							village.hut = 0;
						}
				}

	
	
	generateDisaster();
	console.log(rndDis);

	const rand = (Math.round(Math.random()* 6000)+ 3000);
	
	const interval = setInterval(() => { 
		
			// if rand seconds, then clear buildHut Interval
			wait(rand);

			console.log('game over');
			
			clearInterval(interval);

			$('#playerVillage').append(finalDisaster);
		 // apply damage

	

			if (rndDis.name =='Volcano') {
				console.log("the Volcano damages");
				applyDamage();
					
			

			} else if 

			(rndDis.name =='Tsunami') {
				console.log('the Tsunami cleans away');
				applyDamage();
			

			} else if

			(rndDis.name == 'Tornado') {
				console.log('the Tornado whirls away');
				applyDamage();

			} else if
			
			(rndDis.name =='Fire') {
				console.log('the Fire burns');
				applyDamage();
			}
		


		const playerScore = () => {

			finalScore = (village.population + (village.hut * 10) + (village.hiRise * 30) + village.credits);

			console.log(finalScore); 

		}

		playerScore();

	}, (rand))
	});
			


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
		hut: 0,
		hiRise: 0,
		credits: 200,
		score: 20,

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

				}, 500)
	
		
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

				}, 300)


			});
			
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
		hiRiseDam: 1,
		picture: 'images/Fire.png'

	},	{
		name: "Tsunami",
		popDam: 40,
		hutDam: 3,
		hiRiseDam: 2,
		picture: 'images/bigwave.jpeg'

	},	{
		name: "Volcano",
		popDam: 30,
		hutDam: 5,
		hiRiseDam: 2,
		picture: 'images/Volcano.png'
		


	},	{
		name: "Tornado",
		popDam: 10,
		hutDam: 2,
		hiRiseDam: 0,
		picture: 'images/Tornado.png'

	}
	
]




	














