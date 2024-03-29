function wait(ms) {
		var d = new Date();
		var d2 = null;
		do { d2 = new Date(); }
		while(d2-d < ms);
	};

let $continu = $('<button type="submit" id="continue-btn">Continue...</button>')

let $continu2 = $('<button type="submit" id="continue-btn2">Continue...</button>')

let $villageName1;

let $villageName2;

let $playerPicture1;

let $playerPicture2;

let villagePicture1;

let villagePicture2;

let $playerEnvironment1;

let $playerEnvironment2;

let $disasterPicture;

let $finalScore;

let player1Name;

$('button').on('click', (e) => {
	e.preventDefault();
	if (player1Name) {
		$('#villageInput').val('');
		$villageName2 = $('#villageInput').val();
		$('.inputs').append(`${$villageName2}!`);
		console.log($villageName2);
	} else {
		$villageName1 = $('#villageInput').val();
		$('.inputs').append(`${$villageName1}!`);
	}
	
	$('#villageInput').remove();
	$('#submit-btn').remove();
	// $('.inputs').append(`${$villageName}!`);
	$('#location h2').text('Long live');
	
	wait (100);
	$('.environment h2').text('Click your Environment');
	
	$('.pics_in_a_row').css('display', 'flex');

});

$('.pics_in_a_row').on('click', (e) =>{
	e.preventDefault();
	// console.log('e.target: ', $(e.target))
	if ($villageName2) {

	$playerEnvironment2 = $(e.target).attr('id');
	// console.log('$playerEnvironment2: ', $playerEnvironment2)
	$playerPicture2 = $(e.target).attr('src');
	// console.log('$playerPicture2: ', $playerPicture2)
	villagePicture2 = $('<img>').attr('src', $playerPicture2);
	// console.log('villagePicture2: ', villagePicture2)
	$('.environment h2').text(`You picked ${$playerEnvironment2}`);

	} else if ($villageName1){
		$playerEnvironment1 = $(e.target).attr('id');
		// console.log('$playerEnvironment1: ', $playerEnvironment1)
		$playerPicture1 = $(e.target).attr('src');
		// console.log('$playerPicture1: ', $playerPicture1)
		villagePicture1 = $('<img>').attr('src', $playerPicture1);
		// console.log('villagePicture1: ', villagePicture1)
		$('.environment h2').text(`You picked ${$playerEnvironment1}`);
	}

	
	
	$('.disasterPics').css('display', 'flex');
	

	$continu.on('click', (e) => {
		e.preventDefault();
		// console.log('$playerPicture1 here: ', $playerPicture1)
		$('.grid-container1').css('display', 'none');
		$('.grid-container2').css('display', 'grid');

		if($villageName2) {
			$('#playerVillage h3').text($villageName2);
			$('#playerVillage').css({'background-image' :`url(${$playerPicture2})`, 'background-size': 'cover'});
		
		} else if ($villageName1){
			$('#playerVillage h3').text($villageName1);
			$('#playerVillage').css({'background-image' : `url(${$playerPicture1})`, 'background-size': 'cover'});
		}


	});
	$('#disasters h2').append($continu)
	wait (500);


});
let buildHutInterval;
let buildHiRiseInterval;
let finalScore1;
let finalScore2;

$('#create-btn').on('click', (e) => {


	e.preventDefault();

	$('#create-btn').remove();
	$('#build p').text("When will the disaster hit?");
	$('.gameButton').attr('disabled', false);
	let finalDisaster;
	let rndDis;

	const generateDisaster = (arg) => {
	
		const rnd= Math.floor(Math.random() * disaster.length);
		rndDis = disaster[rnd];
		finalDisaster = $('<img>').attr('src', rndDis.picture);
			}
	

	const applyDamage = (arg) => {	

			village.population -= rndDis.popDam;
						if (village.population < 0) {
							village.population = 0;
						};

			village.hiRise -=rndDis.hiRiseDam;
						if(village.hiRise < 0) {
							village.hiRise = 0;
						};
			village.hut -= rndDis.hutDam;
						if (village.hut < 0) {
							village.hut = 0;
						};

				$('#gameHuts').text(`Huts: ${village.hut} Damage: ${rndDis.hutDam}`);
				$('#gameCredits').text(`Credits: ${village.credits}`);
				$('#gameHiRise').text(`High Rise: ${village.hiRise} Damage: ${rndDis.hiRiseDam}`);
				$('#gamePop').text(`Population: ${village.population} Damage: ${rndDis.popDam}`);			
				}

	
	
	generateDisaster();

	console.log(rndDis);

	const rand = (Math.round(Math.random()* 5000)+ 3000);
	
	const interval = setInterval(() => { 
		
			// if rand seconds, then clear buildHut Interval
			wait(rand);

			console.log('game over');
			
			clearInterval(interval);
			// clearInterval(buildHutInterval);
			// clearInterval(buildHiRiseInterval);

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
			

			$('.description').append($continu2)

			const playerScore = () => {
			if(finalScore1){
				finalScore2 = (village.population + (village.hut * 10) + (village.hiRise * 30) + (village.credits /2));
				$('#playerVillage').append(`Your final score is: ${finalScore2}`);
				$('#Player2 p').text(villageName2 + " " + finalScore2);

			} else { 
				finalScore1 = (village.population + (village.hut * 10) + (village.hiRise * 30) + (village.credits /2));
				$('#playerVillage').append(`Your final score is: ${finalScore1}`);
				}
			}

			playerScore();

		}, (rand))

		
		
	});
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
			// $('#gameScore').text(`Score: ${this.score}`);
		
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
				// $('#gameScore').text(`Score: ${this.score}`);
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



				buildHiRiseInterval = setInterval(()=>{

					// if 15 seconds, then append hiRise and clear interval
				
					const hiRisePicture1 = $('<img>').attr('src', 'images/hiRiseSized.jpg');
					$('#playerVillage').append(hiRisePicture1);
					clearInterval(buildHiRiseInterval);

				}, 300)


			});


		

			
		},

	}
		


		

		$continu2.on('click', (e) => {

			e.preventDefault();

			$('.grid-container2').css('display', 'none');
			$('.grid-container3').css('display', 'grid');
			

			if (finalScore2) { 
				$('#Player2 p').text($villageName2 + " " + finalScore2);


			} else if (finalScore1) {

				// $('#Player1 p').text(player1Name + " " + player1Score);
				// $('#Player2 p').text($villageName2 + " " + finalScore2);
				$('#Player1 p').text($villageName1 + " " + finalScore1);
				sessionStorage.setItem('player1Score', finalScore1);
				sessionStorage.setItem('player1Name', $villageName1);
				$('#Player2 p').text("Ready to challenge?");

			}
		})

		$('#pl2-btn').on('click', (e) => {

			
			location.reload();
			

			$('.grid-container3').css('display', 'none');
			$('.grid-container1').css('display', 'grid');

		})

	

	







	




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




	














