// An array of words to use in the game
const fives = ['aback',  'abide', 'abode',  'abort',  'about',  'above',  'abuse',  'abyss',  'acorn', 'actor', 'adapt',  'admin', 'admit', 'aisle',  'alarm',  'album',  'alert',  'algae',  'alien',  'align',  'alike',  'alley', 'allow', 'alone', 'bacon', 'batch', 'baker', 'basic', 'being', 'berry', 'basil', 'blank', 'blame', 'blade', 'bleak', 'burst', 'brush', 'caper', 'canal', 'cedar', 'cheat', 'charm', 'chart', 'chair', 'cheek', 'cheer', 'child', 'chord', 'chute', 'chunk', 'motel', 'mossy', 'mourn', 'mouth', 'music', 'murky', 'mural', 'munch', 'naive', 'nasal', 'nasty', 'naval', 'newly', 'ninja', 'night', 'niche', 'paper', 'peach', 'phony', 'pause', 'pasty', 'patty', 'pesky', 'pizza', 'place', 'piper', 'piano', 'petal', 'pinky', 'pivot', 'quack', 'quote', 'quick', 'radio', 'rainy', 'raise', 'reach', 'recur', 'recap', 'relax', 'relay', 'refit', 'rehab', 'shard', 'smile', 'smirk', 'snout', 'whoop', 'women', 'woody', 'women'];
const athletes =  ["leonel messi", "michael jordan", 'lebron james', 'steph curry', 'wayne gretzky', 'babe ruth', 'muhammad ali', 'pele', 'ronaldo', 'hazard', 'Lance Armstrong', 'tiger woods', 'mike tyson', 'connor mcgregor', 'sidney crosby', 'roger federer'];
const celebs = ['Jennifer Aniston', 'David Schwimmer', 'George Clooney', 'Brad Pitt', 'Kevin Hart', 'Chris Rock', 'james cordon', 'bradley cooper', 'will smith', 'Ricky Gervais'];
const movies = ['frozen', 'cars', 'toy story', 'hunger games', 'inception', 'interstellar', 'contagion', 'maze runner', 'green book', 'the pianist', 'the martian', 'forest gump', 'fight club', 'hidden figures', 'I am legend', 'Jurassic World', 'jurassic park', 'shutter island', 'venom', 'iron man', 'the avengers', 'coach carter'];
const capitals = ['Muscat', 'Ottawa', 'Bucharest', 'Havana', 'Niamey', 'Andorra la Vella', 'Bangui', 'Hanoi', 'Sucre', 'Sofia', 'Oslo', 'Santiago', 'Djibouti City', 'Tarawa', 'Kingstown', 'Accra', 'Santo Domingo', 'Tashkent', 'Rabat', 'Doha', 'Maputo', 'Thimphu', 'Lusaka', 'Riyadh', 'Castries', 'Khartoum', 'Port Vila', 'Buenos Aires', 'Roseau', 'Nairobi', 'Tunis', 'Malabo', 'Maseru', 'Mbabane', 'Quito', 'Georgetown', 'Cairo', 'Tallinn', 'Kigali', 'Luanda', 'Astana', 'Bridgetown', 'Rome', 'Yaren', 'Port of Spain', 'Stockholm', 'Lima', 'Warsaw', 'Bangkok', 'Nicosia', 'Apia', 'Singapore', 'Moscow', 'Abu Dhabi', 'Luxembourg City', 'Dublin', 'Prague', 'Amman', 'Damascus', 'Sri Jayewardenepura Kotte', 'Dodoma', 'Minsk', 'Helsinki', 'Beirut', 'Montevideo', 'San Marino', 'Freetown', 'San Salvador', 'Bern', 'Tokyo', 'Paris', 'Brussels', 'Victoria', 'Baghdad', 'Guatemala City', 'Kingston', 'Vienna', 'Baku', 'Amsterdam', 'Tehran', 'Port Louis', 'Copenhagen', 'Vatican City', 'Athens', 'Vaduz', 'Zagreb', 'Belgrade', 'Algiers', 'Jakarta', 'Dili', 'Manila', 'Dakar', 'Budapest', 'Abuja', 'Jerusalem', 'Skopje', 'Riga', 'Banjul', 'New Delhi', 'Panama City', 'Windhoek', 'Tripoli', 'Seoul', 'Kyiv', 'Mexico City', 'Kuwait City', 'Lisbon', 'Kabul', 'Tirana', 'Berlin', 'Wellington', 'Brazzaville', 'Palikir', 'Dhaka', 'Madrid', 'Monaco', 'Addis Ababa', 'Beijing', 'London', 'Nassau', 'Honiara', 'Praia', 'Moroni']
const countries = ['Maldives', 'Eritrea', 'Mali', 'Philippines', 'Niger', 'Romania', 'Papua New Guinea', 'Palau', 'Equatorial Guinea', 'Saint Lucia', 'Serbia', 'Switzerland', 'Djibouti', 'United States', 'Norway', 'Ethiopia', 'Turkmenistan', 'Bulgaria', 'Nicaragua', 'Sri Lanka', 'Moldova', 'Cape Verde', 'Cameroon', 'Democratic Republic of the Congo', 'Iraq', 'Saudi Arabia', 'Oman', 'Ukraine', 'Nauru', 'Armenia', 'Belarus', 'Senegal', 'Spain', 'Luxembourg', 'Andorra', 'Sierra Leone', 'Kuwait', 'Trinidad and Tobago', 'Venezuela', 'Cambodia', 'Uruguay', 'Argentina', 'Dominica', 'Kiribati', 'Vietnam', 'Liberia', 'Guinea', 'Hungary', 'Syria', 'Austria', 'Chad', 'Liechtenstein', 'Namibia', 'Lesotho', 'Kenya', 'Peru', 'Montenegro', 'Pakistan', 'Russia', 'Portugal', 'Tajikistan', 'Togo', 'Singapore', 'Monaco', 'Bolivia', 'Czech Republic', 'Indonesia', 'Saint Vincent and the Grenadines', 'Nigeria', 'Croatia', 'Barbados', 'Burkina Faso', 'Lebanon', 'Zimbabwe', 'Comoros', 'Bhutan', 'Burundi', 'Italy', 'South Korea', 'Vatican City', 'Iran', 'Lithuania', 'Madagascar', 'Central African Republic', 'United Arab Emirates', 'Uganda', 'Estonia', 'Botswana', 'Kazakhstan', 'Jordan', 'Tanzania', 'Slovakia', 'Tonga', 'Latvia', 'Malta', 'Jamaica', 'El Salvador', 'Panama', 'Honduras', 'Colombia', 'Republic of Ireland', 'Mexico', 'Costa Rica', 'Guatemala', 'Japan', 'Mozambique', 'Angola', 'Chile', 'Slovenia', 'Australia', 'Israel', 'Albania', 'Federated States of Micronesia', 'Bahamas', 'Gabon', 'Nepal', 'Swaziland', 'Canada', 'France', 'Solomon Islands', 'Laos', 'Malawi', 'North Korea', 'Ecuador', 'Afghanistan', 'Finland', 'Paraguay', 'Azerbaijan', 'Antigua and Barbuda', 'Germany', 'East Timor', 'Tuvalu', 'Mauritania', 'Sweden', 'Macedonia', 'Greece', 'Marshall Islands', 'Tunisia', 'Georgia', 'Rwanda', 'Bangladesh', 'Denmark', 'Malaysia', 'Grenada', 'Mongolia', 'New Zealand', 'Vanuatu', 'Iceland', 'Poland', 'Benin', 'Saint Kitts and Nevis', 'Somalia', 'Suriname', 'South Africa', 'Yemen', 'Brunei Darussalam', 'The Gambia', 'Kyrgyzstan', 'Morocco', 'Uzbekistan', 'Bahrain', 'Cuba', 'Samoa', 'Brazil', 'Cyprus', 'Myanmar', 'Seychelles', 'Turkey', 'Belize', 'Sudan', 'Libya', 'Haiti', 'Dominican Republic', 'Belgium', 'Fiji', 'India', 'United Kingdom', 'Netherlands', 'Zambia', 'Qatar', 'Mauritius', 'Republic of the Congo', 'Ghana', 'Thailand', 'Bosnia and Herzegovina', 'Guyana', 'San Marino', 'Algeria', 'Egypt']
const places = ['USA', 'England', 'Scotland', 'Wales', 'Italy', 'Germany', 'Norway', 'Sweden', 'Denmark', 'Africa', 'Times Square', 'Central Park', 'Mayfair', 'Ghana', 'Kenya', 'Madagascar', 'Rome', 'London', 'New York', 'Hong Kong', 'Shanghai', 'Venice', 'Spain', 'Russia', 'Stone Henge', 'Niagara Falls']
const music = ['Twinkle Star', 'Without You', 'Stayin Alive', 'In my life', 'wonderwall', 'Kiss', 'Back to Black', 'Hallelujah', 'Yesterday', 'Fast Car', 'September', 'One', 'Airplanes', 'Party in the USA', 'fuck you', 'call me maybe', 'payphone', 'the motto', 'good feeling', 'titanium', 'Mercy', 'gangnam style', 'headlines', 'skyfall', 'thrift shop', 'get lucky', 'harlem shake', 'wrecking ball', 'swimming pools', 'wake me up']
const compsci = ['bytes', 'bits', 'python', 'java', 'script', 'terminal', 'packages', 'Git', 'gigabyte', 'megabyte', 'javascript', 'csv', 'html', 'react']
const urban = ['fuck', 'ass', 'tits', 'pussy', 'skank', 'prick', 'shit', 'pubes', 'shat', 'sex', 'fucked', 'chink', 'escort', 'doggy', 'whore', 'slut', 'weed', 'coke', 'cuck', 'cuckhold']
const carBrands = ['volvo', 'audi', 'mercedes', 'ford', 'jaguar', 'rolls royce', 'ferrari', 'lamborghini', 'McLaren', 'infiniti', 'peugeot', 'alfa romeo', 'maserati', 'acura', 'kia', 'hyundai', 'daewoo', 'honda', 'bmw', 'land rover', 'toyota', 'mazda', 'bentley', 'lancia', 'mitsubishi', 'lexus', 'bugatti', 'citroen', 'volkswagen', 'Cadillac', 'gmc', 'Chevrolet', 'jeep', 'aston martin', 'Buick', 'fiat', 'subaru', 'mini', 'MG', 'nissan', 'tesla', 'opel', 'tata', 'smart', 'ram', 'chrysler', 'suzuki', 'rover', 'porsche', 'skoda', 'DMC', 'Dodge', 'lotus', 'rivian', 'Koenigsegg']
const brands = ['peloton', 'netflix', 'costco', 'chick fil a', 'apple', 'amazon', 'nike', 'addidas', 'target', 'google', 'spotify', 'zoom', 'roblox', 'lego', 'microsoft', 'instagram', 'headspace', 'nintendo', 'walt disney', 'rockstar games', 'nvidia', 'starbucks', 'uniqlo', 'chanel', 'linkedIn', 'red bull', 'logitech', 'pinterest', 'chipotle', 'dunkin', 'crocs', 'shopify', 'gucci', 'coca cola', 'puma', 'hbo', 'adobe', 'visa', 'square', 'versace', 'ubisoft', 'mcdonalds', 'home depot', 'uber', 'twitter', 'reddit', 'bose']
const words = athletes.concat(celebs, movies, places, music, compsci, carBrands);


// Select the elements we will need in the game
const wordContainer = document.querySelector(".word-container");
const keyboard = document.querySelector(".keyboard");
const revealWordButton = document.querySelector("#reveal-word");
const newGameButton = document.querySelector("#new-game");
const selectedCategory = document.querySelector("#category");
const revealLetterButton = document.querySelector("#reveal-letter");
const selectedCategoryText = document.querySelector("#selected-category");
const showHideKeyboardButton = document.querySelector("#show-hide-keyboard");

// Variables to keep track of the game state
let currentWord;
let currentWordNoSpace;
let lettersGuessed = [];
let incorrectGuesses = 0;
let currentGuess;
let gameGoing = false;
let showingKeyboard = false;
let theme = "light";

// Function to start a new game
function startNewGame() {
    // Reset the game state
    lettersGuessed = [];
    incorrectGuesses = 0;
    currentGuess = 0;
    gameGoing = true;

    category = selectedCategory.value;
    selectedWords = words;
    categoryText = "";

    // select a word from the category at random
    // switch statement for the category
    switch (category) {
        case 'normal':
            selectedWords = fives;
            break;
        case 'athletes':
            selectedWords = athletes;
            break;
        case 'celebs':
            selectedWords = celebs;
            break;
        case 'movies':
            selectedWords = movies;
            break;
        case 'capitals':
            selectedWords = capitals;
            break;
        case 'music':
            selectedWords = music;
            break;
        case 'compsci':
            selectedWords = compsci;
            break;
        case 'urban':
            selectedWords = urban;
            break;
        case 'cars':
            selectedWords = carBrands;
            break;
        case 'countries':
            selectedWords = countries;
            break;
        case 'brands':
            selectedWords = brands;
            break;
        default:
            selectedWords = words;
    }

    // Select a new word at random
    currentWord = selectedWords[Math.floor(Math.random() * selectedWords.length)].toUpperCase();
    currentWordNoSpace = currentWord.replace(/\s/g, ''); // this will remove all spaces from the word

    // if (category === "all") { // if no category is selected
    //     console.log("no category selected")
    //     if (athletes.includes(currentWord.toK
    //         categoryText = "Athletes";
    //     } else if (celebs.includes(currentWord)) {
    //         categoryText = "Celebrities";
    //     } else if (movies.includes(currentWord)) {
    //         categoryText = "Movies";
    //     } else if (places.includes(currentWord)) {
    //         categoryText = "Places";
    //     } else if (music.includes(currentWord)) {
    //         categoryText = "Music";
    //     } else if (compsci.includes(currentWord)) {
    //         categoryText = "Computer Science";
    //     }

    //     selectedCategoryText.innerHTML = categoryText;
    // }

    // update the category text
    


    // Create the letter cards for the word
    wordContainer.innerHTML = "";
    for (let row = 0; row < 6; row++) {
        const wordRow = document.createElement("div");
        wordRow.classList.add("row");

        if (row === 0) {
            wordRow.classList.add("current-row");
        }
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === " ") {
                const letterCard = document.createElement("div");
                letterCard.classList.add("letter-card-space");
                // letterCard.innerHTML = " ";
                wordRow.appendChild(letterCard);
            } else {
                const letterCardFront = document.createElement("div");
                const letterCardBack = document.createElement("div");
                // if the word has more than 14 letters, make the letter cards smaller
                if (currentWord.length > 14) {
                    letterCardFront.classList.add("letter-card-small-front");
                    letterCardBack.classList.add("letter-card-small-back");
                } else {
                    letterCardFront.classList.add("letter-card");
                    letterCardBack.classList.add("letter-card-back");
                }
                wordRow.appendChild(letterCardFront);
                wordRow.appendChild(letterCardBack);
                // const letterCard = document.createElement("div");
                // // if the word has more than 14 letters, make the letter cards smaller
                // if (currentWord.length > 14) {
                //     letterCard.classList.add("letter-card-small");
                // } else {
                //     letterCard.classList.add("letter-card");
                // }
                // wordRow.appendChild(letterCard);
            }
        }
        wordContainer.appendChild(wordRow);
    }

//   Create the keyboard buttons
    keyboard.innerHTML = "";
    // create a keyboard layout, in using three rows of letters just like a real keyboard layout
    const keyboardLayout = ['QWERTYUIOP', 'ASDFGHJKL=', 'ZXCVBNM~'];
    for (let row = 0; row < keyboardLayout.length; row++) {
        const keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");
        for (let i = 0; i < keyboardLayout[row].length; i++) {
            if (keyboardLayout[row][i] === "~") {
                // this is the enter key
                const enterKey = document.createElement("button");
                enterKey.classList.add("keyboard-key");
                enterKey.classList.add("enter-key")
                enterKey.innerHTML = "Enter";
                keyboardRow.appendChild(enterKey);
                break;
            } else if (keyboardLayout[row][i] === "=") {
                // this is the backspace key
                const backspaceKey = document.createElement("button");
                backspaceKey.classList.add("keyboard-key");
                backspaceKey.classList.add("backspace-key")
                backspaceKey.innerHTML = "Back";
                keyboardRow.appendChild(backspaceKey);
            } else {
                const keyboardKey = document.createElement("button");
                keyboardKey.classList.add("keyboard-key");
                keyboardKey.innerHTML = keyboardLayout[row][i];
                keyboardRow.appendChild(keyboardKey);
            }
        }
        keyboard.appendChild(keyboardRow);
    }
}

// when any key on the keyboard is clicked append that letter to the current guess
keyboard.addEventListener("click", function(event) {
    if (gameGoing && event.target.classList.contains("keyboard-key")) {
        const letter = event.target.innerHTML;
        // if its the enter key, check the guess
        if (letter === "Enter") {
            guessWord();
            return;
        } else if (letter === "Back") {
            // if its the backspace key, remove the last letter from the current guess
            const currentLetterCards = document.querySelectorAll(".current-row .letter-card");
            for (let i = currentLetterCards.length - 1; i >= 0; i--) {
                if (currentLetterCards[i].innerHTML !== "") {
                    currentLetterCards[i].innerHTML = "";
                    break;
                }
            }
            return;
        }
        const currentLetterCards = document.querySelectorAll(".current-row .letter-card");
        // add the letter to the end of the current guess word cards
        for (let i = 0; i < currentLetterCards.length; i++) {
            if (currentLetterCards[i].innerHTML === "") {
                currentLetterCards[i].innerHTML = letter;
                break;
            }
        }
    }
});


// Add event listeners for the buttons
revealWordButton.addEventListener("click", function() {
    const currentLetterCards = document.querySelectorAll(".current-row .letter-card");
    for (let i = 0; i < currentLetterCards.length; i++) {
        currentLetterCards[i].innerHTML = currentWordNoSpace[i];
        // style the letter card
        currentLetterCards[i].style.backgroundColor = "#6ca965";
    }
});

newGameButton.addEventListener("click", startNewGame);

showHideKeyboardButton.addEventListener("click", function() {
    if (showingKeyboard) {
        keyboard.style.display = "none";
        showHideKeyboardButton.innerHTML = "Show Keyboard";
        showingKeyboard = false;
    } else {
        keyboard.style.display = "grid";
        showHideKeyboardButton.innerHTML = "Hide Keyboard";
        showingKeyboard = true;
    }
});


function revealLetter() {
    // reveals a random letter in the current row
    const currentLetterCards = document.querySelectorAll(".current-row .letter-card");
    const keyboardKeys = document.querySelectorAll(".keyboard-key");
    const randomIndex = Math.floor(Math.random() * currentLetterCards.length);
    // check if the letter is already revealed
    if (currentLetterCards[randomIndex].innerHTML !== "") {
        revealLetter();
    } else {
        currentLetterCards[randomIndex].innerHTML = currentWordNoSpace[randomIndex];
        currentLetterCards[randomIndex].style.backgroundColor = "#6ca965";
        for (let i = 0; i < keyboardKeys.length; i++) {
            if (keyboardKeys[i].innerHTML === currentWordNoSpace[randomIndex]) {
                keyboardKeys[i].style.backgroundColor = "#6ca965";
            }
        }
    }
}

revealLetterButton.addEventListener("click", revealLetter);

function moveToNextGuess() {
    currentGuess++;
    const currentRow = document.querySelector(".current-row");
    currentRow.classList.remove("current-row");
    currentRow.nextElementSibling.classList.add("current-row");
}

function updateKeyboard(guess, target) {
    // given a guess word and a target word, updates the keyboard to show the letters with their feedback
    const keyboardKeys = document.querySelectorAll(".keyboard-key");
    for (let i = 0; i < guess.length; i++) {
        for (let j = 0; j < keyboardKeys.length; j++) {
            if (guess[i] === keyboardKeys[j].innerHTML) {
                if (guess[i] === target[i]) {
                    keyboardKeys[j].style.backgroundColor = "#6ca965";
                } else if (target.indexOf(guess[i]) !== -1) {
                    keyboardKeys[j].style.backgroundColor = "#c8b653";
                } else {
                    keyboardKeys[j].style.backgroundColor = "#787c7f";
                }
            }
        }
    }
}

function guessWord() {
    const currentLetterCards = document.querySelectorAll(".current-row .letter-card");

    let guess = "";
    for (let i = 0; i < currentLetterCards.length; i++) {
        guess += currentLetterCards[i].innerHTML;
    }
    console.log(guess)

    // Check the user's guess against the hidden word
    for (let i = 0; i < currentWordNoSpace.length; i++) {
        if (guess[i] === currentWordNoSpace[i]) {
            currentLetterCards[i].style.backgroundColor = "#6ca965";
            currentLetterCards[i].style.border = "1px solid #6ca965";
        } else if (currentWordNoSpace.indexOf(guess[i]) !== -1) {
            currentLetterCards[i].style.backgroundColor = "#c8b653";
            currentLetterCards[i].style.border = "1px solid #c8b653";
        } else {
            currentLetterCards[i].style.backgroundColor = "#787c7f";
            currentLetterCards[i].style.border = "1px solid #787c7f";
        }
    }
    // animate the flip of the letter cards with a delay from left to right of 0.1 seconds per card
    for (let i = 0; i < currentLetterCards.length; i++) {
        currentLetterCards[i].classList.toggle('flipped');
        // delay the flip of the next card by 0.1 seconds
    }


    // Update the keyboard
    updateKeyboard(guess, currentWordNoSpace);

    // Check if the user has guessed the word correctly
    if (guess === currentWordNoSpace) {
        gameGoing = false;
    } else {
        if (currentGuess < 5) {
            moveToNextGuess();
        } else {
            alert("You lose! The word was: " + currentWord);
        }
    }
}

document.addEventListener("keydown", function(event) {
    if (gameGoing) {
        // Select the current row of letter cards
        const currentRow = document.querySelector("current-row");

        if (event.keyCode >= 65 && event.keyCode <= 90) {
            // Get the current letter cards for the row
            const currentLetterCards = document.querySelectorAll(".current-row .letter-card");

            // Check if the current row has any empty letter cards
            for (let i = 0; i < currentLetterCards.length; i++) {
                if (currentLetterCards[i].innerHTML === "") {
                    // Add the letter to the first empty letter card
                    currentLetterCards[i].innerHTML = event.key.toUpperCase();
                    break;
                }
            }
        } else if (event.keyCode === 8) {
            const currentLetterCards = document.querySelectorAll(".current-row .letter-card");

            for (let i = currentLetterCards.length - 1; i >= 0; i--) {
                if (currentLetterCards[i].innerHTML !== "" && currentLetterCards[i].style.backgroundColor !== "rgb(108, 169, 101)") {
                    currentLetterCards[i].innerHTML = "";
                    break;
                }
            }
        } else if (event.keyCode === 13) {
            const currentLetterCards = document.querySelectorAll(".current-row .letter-card");

            // Check if the current row has any empty letter cards
            for (let i = 0; i < currentLetterCards.length; i++) {
                if (currentLetterCards[i].innerHTML === "") {
                    console.log("current letter: " + currentLetterCards[i].innerHTML)
                    return;
                }
            }
            
            guessWord();
        }
    }
});


// Start the first game
startNewGame();
