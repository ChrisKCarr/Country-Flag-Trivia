const countriesList = [];
const countryChoices = [];
let score = 0;
let turn = 0;
const button = document.querySelectorAll(".box");
const flagButtonPatrent = document.querySelector(".choices");
//Modal Options -
const modal = document.querySelector('.modal');
const customizeButton = document.querySelector('#customizeGame');
const close = document.getElementsByClassName("close")[0];
const numOfPlayersSubmit = document.querySelector(".numOfPlayersSubmit"); 
const turnLimitButton = document.querySelector(".turnLimit");
const turnCountHTML = document.querySelector(".turnCount");
// const playerNameModal = document.querySelector(".playerNameModal");
const playersList = document.querySelector(".playersBox");
var setTurns = 10;
//Player Object Array
let players = [];
//----------------------------------------------------//----------------------------------------------------//----------------------------------------------------//----------------------------------------------------
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(res => {
        // console.log(res); -- logs array of countries and all country info
        filterCountryArray(res);
        // console.log(countriesList[44]); -- Works, data[countryIndex].CountryName or CountryFlag
        pickRandomCountries();
    })
    .catch(err => console.log("something went wrong ;/", err));
//----------------------------------------------------//----------------------------------------------------//----------------------------------------------------//----------------------------------------------------
//Filters rest countries API by name and flag url. -- Take array of countries -- forEach country, take the country name and flag and place into an object array -- return the array containing just the name and flag of each country. 
function filterCountryArray(res) {
    res.forEach(country => {
        countriesList.push({name: country.name, flag: country.flag});
    });
    return countriesList;
};

//Picks a random country and displays that in the questions innerText -- Picks an addition 3 random countries from the countriesList and pushes them into a "choices" array -- each choice box innerHtml is replaced with the choices flag urls.
function pickRandomCountries() {
    let targetCountry = countriesList[Math.floor(Math.random()*countriesList.length)];
    countryChoices.push(targetCountry);
    for(let i=0; i<3;i++) {countryChoices.push(countriesList[Math.floor(Math.random()*countriesList.length)])};
    // console.log(countryChoices);  -- Works, answer is always at 0 index, 1-3 index are random countrys.
    changeQuestion(targetCountry);
    setFlags(countryChoices, targetCountry);
    
}
//Grab question element from doc -- change innerText to match the random countries name. -- return the element.
function changeQuestion(pickedCountry) {
    const questionEle = document.querySelector('.qP');
    questionEle.innerText = `Which is the flag for ${pickedCountry.name}`;
    return questionEle;
}
//Takes array of choices, changes each button background to display that countries flag from its flag:url -- 
function setFlags(countryChoices, targetCountry) {
    const shuffledPicks = shuffle(countryChoices);
    // console.log(shuffledPicks); -- Works
    for (let index = 0; index < shuffledPicks.length; index++) {
        if(shuffledPicks[index] === targetCountry) {
            console.log('correct country: ', targetCountry, ' at index: '+index);
            button[index].style.backgroundImage = `url(${shuffledPicks[index].flag})`;
            button[index].style.backgroundSize = '100% 100%';
            button[index].style.backgroundRepeat = `no-repeat`;
            button[index].name = 'correct';
        } else {
            console.log(button[index], shuffledPicks[index].flag);
            button[index].style.backgroundImage = `url(${shuffledPicks[index].flag})`;
            button[index].style.backgroundSize = '100% 100%';
            button[index].style.backgroundRepeat = `no-repeat`;
        }
    }  
}
//Fisher-Yates Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

//Score -- adds 1 point each correct answer - sum starts at 0 - grabs element for score - changes innerText to display current score number -
function addScore() {
    score += 1;

    const scoreEle = document.querySelector(".score");
    scoreEle.innerText = `score: ${score}`;
    return scoreEle;
};
//tracks the games amount of turns -- starts at 0 -- stops game at 10;
function logTurn() {
    turn++;
    turnCountHTML.innerText = `turn: ${turn} /${setTurns}`
    if(turn == setTurns) {
        stopGame();
    } else {
        clearBoard();
    }
};
//Once game is at 10 turns return alert of users score -- 
function stopGame() {
    // flagButtonPatrent.removeEventListener('click', function(evt) {console.log('over')});
    alert(`Your final score is ${score}`);
    return location.reload();
}
//after each turn, board is cleared and setFlag is rerun -- first for loop through flag holding elements, -- if/else to check for element with name = correct, clear it. -- clear background for all elements. -- run setFlag function again after for loop.
function clearBoard() {
    const grabbedFlags = document.querySelectorAll(".box");
    for (let index = 0; index < grabbedFlags.length; index++) {
        countryChoices.pop();
        if(grabbedFlags[index].name === 'correct') {
            grabbedFlags[index].name = "x";
            grabbedFlags[index].style.backgroundImage = 'url(none)';
        } else {
            grabbedFlags[index].style.backgroundImage = 'url(none)';
        }
    }
    pickRandomCountries();
};
//Modual functions
function createPlayers(num) {
    
    for (let index = 1; index <= num; index++) {
        let playername = prompt(`Please enter player: ${index} name`);
        players.push({name: playername, playerscore: 0});
        displayPlayer(index);
    }
    // console.log(players) -- Works, logs players.
};
//Player Functions--
//append children to the players list to be displayed - each list element will consist of inner Text being the players name and score.
function displayPlayer(index) {
    let playerEle = document.createElement("li");
    console.log(players);
    let plyname = players[index].name;
    let plyscore = players[index].playerscore;
    playerEle.innerText = `${plyname}: ${plyscore}`;
    playersList.appendChild(playerEle);
}
//EVENTS//----------------------------------------------------//----------------------------------------------------//----------------------------------------------------//----------------------------------------------------
flagButtonPatrent.addEventListener('click', function(event) {
    event.preventDefault();

    if(event.target.name == 'correct') {
        addScore();
        logTurn();
    } else {
        alert('WRONG');
        logTurn();
    }
})
//Modual Events
customizeButton.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}
//closes when clicked anbywhere outside of modual
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
numOfPlayersSubmit.onclick = function(event) {
    event.preventDefault();
    setPlayerNumber = document.getElementById("playersNum").value;
    console.log(`The number of players has been set to ${setPlayerNumber}`);
    createPlayers(setPlayerNumber);
}
turnLimitButton.onclick = function(event) {
    event.preventDefault();
    setTurns = document.getElementById("turns").value;
    alert(`The turns per round have been set to ${setTurns}`);
    turnCountHTML.innerText = `turn: ${turn} /${setTurns}`
    console.log('Turn amount: ',setTurns);
}