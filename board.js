const questions = {
    Music: {
        100: {
            question: 'This country/pop singer had three songs that appeared on Billboard’s Top 20 songs of 2015; one such title was her top hit, “Bad Blood”.',
            answer: 'Taylor Swift',
        },
        200: {
            question: 'Ufologists’ knowledge was used for this Nicki Minaj song mentioning how these celestial objects were “meant to fly”.',
            answer: 'Starships',
        },
        300: {
            question: 'What\'s the name of Destiny\'s Child\'s debut album?',
            answer: 'Destiny\'s Child',
        },
        400: {
            question: 'What year did Britney Spears release her hit song “Toxic”?',
            answer: '2003',
        },
        500: {
            question: 'Who sang the theme song for Titanic?',
            answer: 'Celine Dion',
        }
    },
    Television: {
        100: {
            question: 'The Shinigami is in love with apples. Can you recall his name?',
            answer: 'Ryuk',
        },
        200: {
            question: 'This famous American sitcom featured a Superman reference in every episode.',
            answer: 'Seinfeld',
        },
        300: {
            question: 'On “Family Guy,” what musical instrument does Lois Griffin teach?',
            answer: 'Piano',
        },
        400: {
            question: 'What is the parallel universe featured in “Stranger Things” called?',
            answer: 'The Upside Down',
        },
        500: {
            question: 'On “Dear White People,” what is the name of the college?',
            answer: 'Winchester College',
        }
    },
    // Add other categories with their questions
   
    Food: {
        100: {
            question: 'Galao is a coffee drink originating in this country.',
            answer: 'Portugal',
        },
        200: {
            question: 'I\'m a fiery addition to Jamaican dishes.',
            answer: 'Scotch Bonnet',
        },
        300: {
            question: 'A drink made from a bean. Helps you wake up.',
            answer: 'Coffee',
        },
        400: {
            question: 'It is meat from a cow?',
            answer: 'Steak',
        },
        500: {
            question: 'What spice will you find in Curry?',
            answer: 'Ginger',
        },
        // Add more values as needed
    },

    Sports: {
        100: {
            question: 'What does NBA stand for?',
            answer: 'National Basketball Association',
        },
        200: {
            question: 'The bobsleigh team of which nation was the film ‘Cool Runnings’ focused on?',
            answer: 'Jamaica',
        },
        300: {
            question: 'How many players are on a baseball team?',
            answer: '9',
        },
        400: {
            question: 'What is the only sport to be played on the moon?',
            answer: 'Golf',
        },
        500: {
            question: 'In what game is "love" a score?',
            answer: 'Tennis',
        },
        // Add more values as needed
    },
    
    Holiday: {
        100: {
            question: 'This song is a traditional tune sung in the movie “Mean Girls” during the holiday talent show.',
            answer: 'Jingle Bell Rock',
        },
        200: {
            question: 'In the song “Jingle Bells,” how many horses are pulling the sleigh?',
            answer: 'One',
        },
        300: {
            question: 'What’s the highest grossing Christmas movie of all time?',
            answer: 'The Grinch',
        },
        400: {
            question: 'Deep-fried latkes are typically eaten around which Jewish holiday?',
            answer: 'Hanukkah',
        },
        500: {
            question: 'What spice will you find in Curry?',
            answer: 'Ginger',
        },
        // Add more values as needed
    },
    
};
let timer; // Variable to store the timer
let currentPoints=100;
let currentCategory='';
function askQuestion(category, points) {
    // Clear previous timer
    clearInterval(timer);

    currentCategory = category;
    const questionData = questions[category][points];
    document.getElementById('question-text').textContent = `(${currentCategory}) Question for $${points}: ${questionData.question}`;
    currentPoints = points;
    document.getElementById('myModal').style.display = 'block';

    // Start a 60-second timer
    let timeLeft = 60;
    document.getElementById('timer').textContent = `Time left: ${timeLeft}`;
    timer = setInterval(function () {
        timeLeft--;
        if (timeLeft >= 0) {
            document.getElementById('timer').textContent = `Time left: ${timeLeft}`;
        }
        if (timeLeft === 0) {
            clearInterval(timer);
            alert('Time is up! You lost $' + currentPoints + '.');
            updateScore(-currentPoints);
            document.getElementById('myModal').style.display = 'none';
            document.getElementById('answer').value = '';
        }
    }, 1000);
}

function checkAnswer() {
    clearInterval(timer); // Stop the timer
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const questionData = questions[currentCategory][currentPoints];
    const correctAnswer = questionData.answer;

    if (userAnswer === correctAnswer) {
        updateScore(currentPoints);
        alert('Correct! You earned $' + currentPoints + '.');
    } else {
        updateScore(-currentPoints);
        alert('Incorrect. You lost $' + currentPoints + '.');
    }

    document.getElementById('myModal').style.display = 'none';
    document.getElementById('answer').value = '';
}
function updateScore(points) {
    currentPoints += points;
    document.getElementById('score').textContent = currentPoints;
}
