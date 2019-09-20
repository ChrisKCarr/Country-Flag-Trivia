# Country-Flag-Trivia

A simple flag trivia game where 1 or multiple players can test themselves to see how many country flags they know. A custom amount of turns can be set (between 3 to 100). The game was created using HTML, CSS, and JavaScript.

[image]


### Installing

Simply download the Zip folder for the repo, or fork it, and open up the index.html file on your computer.


## Built With

* [JavaScript]
* [HTML]
* [CSS]
*[REST Countries API] (https://restcountries.eu)

## Approach Taken

The game was created by using the REST countries API in order to create an array of objects, each object containing a name and flag url. This was then passed into functions which selected out a random country to be set as the "correct ansewer" and an addition 3 random countries to be passed in as choices, fisher-yates was used as the shuffle method. The flags are background images to their respective button elements within the HTML document, a function titled ```setFlags()``` was used to interact with the DOM. Upon the users click, an event is logged which keeps track if score should be added, the passing of a turn, and the clearing of the board, proceeding to a loop of the function which sets the random countries again ```pickRandomCountries()```. Additionally, the "Custom Game" button in the top left corner of the screen allows for the player to add additional players (for group games), and/or set the number of turns in a game round (between 3 turns to 100). 


## Unsolved Problems

The game logic is sound but does contain a few bugs I would like to clean up eventuallay, those being:
* [douplicate countries still appear - a function to filter douplicate countries from the ```countryChoices``` array has been started but as of yet still needs to be fixed.]
* [When playing with multiple players, after each round, the turns counter does not rest back to 1 until that player has already taken their first turn. Example: The player 1 ends with turns 3/3, player 2 makes their first pick with the turn counter displaying 3/3, only after they have made their first choice does the turn counter reseat to 2/3.]
* [In the Custom Games button - no logic has yet been made to prevent the infinite addition of players, which spills out over the DOM. The input element only prevents a number between 2-4 per submission but allows for an infinte amount of submissions]

## Future Plans

* [The replacement of a simple ```alert()``` for wrong picks, replaced with either a big red X over the chosen button element OR idealy, a modal which displays the correct flag the user should have choosen. This popup could even be an option feature the user could turn on/off within the "Custom Game" button.]
* [Within the "Custom Game" button, make a possibility to play the game with the API filtering the countries picked by spesific regions.]
* [A timed game mode, where there is x amount of time counting down and the user has to pick the correct flags as fast as possible, seeing how far they can go. One wrong answer and the game ends, or if the user has made no wrong choices, the game would end once the timer reaches 0.]

## Authors

* **Chris Carr - project creator.
