const countriesList = [];
const countryChoices = [];

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(res => {
        // console.log(res); -- logs array of countries and all country info
        filterCountryArray(res);
        // console.log(countriesList[44]); -- Works, data[countryIndex].CountryName or CountryFlag
        pickRandomCountries();
    })
    .catch(err => console.log("something went wrong ;/", err));

//Filters rest countries API by name and flag url. -- Take array of countries -- forEach country, take the country name and flag and place into an object array -- return the array containing just the name and flag of each country. 
function filterCountryArray(res) {
    res.forEach(country => {
        countriesList.push({name: country.name, flag: country.flag});
    });
    return countriesList;
};

//Picks a random country and displays that in the questions innerText -- Picks an addition 3 random countries from the countriesList and pushes them into a "choices" array -- each choice box innerHtml is replaced with the choices flag urls.
function pickRandomCountries() {
    const targetCountry = countriesList[Math.floor(Math.random()*countriesList.length)];
    countryChoices.push(targetCountry);
    for(let i=0; i<3;i++) {countryChoices.push(countriesList[Math.floor(Math.random()*countriesList.length)])};
    // console.log(countryChoices);  -- Works, answer is always at 0 index, 1-3 index are random countrys.
    changeQuestion(targetCountry);
    setFlags(countryChoices);

}
//Grab question element from doc -- change innerText to match the random countries name. -- return the element.
function changeQuestion(pickedCountry) {
    const questionEle = document.querySelector('.questions');
    questionEle.innerText = `Which is the flag for ${pickedCountry.name}`;
    return questionEle;
}
//Takes array of choices, changes each button background to display that countries flag from its flag:url -- 
function setFlags(countryChoices) {
    const shuffledPicks = shuffle(countryChoices);
    // console.log(shuffledPicks); -- Works
    
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
  
//TESTS
// console.log(countriesList[44]);

