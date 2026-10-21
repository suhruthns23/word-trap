
"use strict";

/* =========================================
   WORD TRAP — COMPLETE GAME ENGINE
   ========================================= */

const TURN_LENGTH = 60;

const QUESTIONS = {
  Funny: [
    { word: "Chicken", forbidden: ["Egg", "Hen", "Rooster", "Farm"] },
    { word: "Snoring", forbidden: ["Sleep", "Noise", "Nose", "Night"] },
    { word: "Clown", forbidden: ["Funny", "Circus", "Joke", "Makeup"] },
    { word: "Selfie", forbidden: ["Photo", "Camera", "Phone", "Picture"] },
    { word: "Meme", forbidden: ["Internet", "Funny", "Image", "Viral"] },
    { word: " hiccups", forbidden: ["Water", "Burp", "Sound", "Drink"] },
    { word: "Monkey", forbidden: ["Banana", "Tree", "Animal", "Tail"] },
    { word: "Sneezing", forbidden: ["Nose", "Achoo", "Cold", "Tissue"] },
    { word: "Karaoke", forbidden: ["Sing", "Song", "Mic", "Music"] },
    { word: "Tickle", forbidden: ["Laugh", "Funny", "Touch", "Giggle"] }
  ],

  Movies: [
    { word: "Spider-Man", forbidden: ["Spider", "Web", "Peter Parker", "Superhero"] },
    { word: "Harry Potter", forbidden: ["Wizard", "Magic", "Hogwarts", "Wand"] },
    { word: "Batman", forbidden: ["Robin", "Joker", "Gotham", "Bat"] },
    { word: "Titanic", forbidden: ["Ship", "Iceberg", "Leonardo", "Sinking"] },
    { word: "Avatar", forbidden: ["Blue", "Pandora", "Alien", "James Cameron"] },
    { word: "Cricket", forbidden: ["Bat", "Ball", "Wicket", "Bowler"] },
    { word: "Superman", forbidden: ["Kryptonite", "Clark Kent", "Cape", "Flying"] },
    { word: "Dinosaur", forbidden: ["Extinct", "T-Rex", "Jurassic", "Fossil"] },
    { word: "Netflix", forbidden: ["Streaming", "Series", "Movies", "Subscription"] },
    { word: "Oscar", forbidden: ["Award", "Actor", "Hollywood", "Film"] }
  ],

  Food: [
    { word: "Pizza", forbidden: ["Cheese", "Slice", "Oven", "Topping"] },
    { word: "Dosa", forbidden: ["South Indian", "Crispy", "Batter", "Chutney"] },
    { word: "Ice Cream", forbidden: ["Cold", "Cone", "Frozen", "Dessert"] },
    { word: "Burger", forbidden: ["Bun", "Patty", "Cheese", "Fast food"] },
    { word: "Chocolate", forbidden: ["Sweet", "Cocoa", "Brown", "Candy"] },
    { word: "Popcorn", forbidden: ["Movie", "Corn", "Snack", "Butter"] },
    { word: "Watermelon", forbidden: ["Fruit", "Green", "Red", "Seeds"] },
    { word: "Sandwich", forbidden: ["Bread", "Filling", "Lunch", "Slices"] },
    { word: "Coffee", forbidden: ["Caffeine", "Cup", "Brew", "Morning"] },
    { word: "Noodles", forbidden: ["Slurp", "Chopsticks", "Pasta", "Instant"] }
  ],

  Everyday: [
    { word: "Umbrella", forbidden: ["Rain", "Wet", "Monsoon", "Open"] },
    { word: "Toothbrush", forbidden: ["Teeth", "Paste", "Brush", "Morning"] },
    { word: "Refrigerator", forbidden: ["Cold", "Kitchen", "Food", "Freezer"] },
    { word: "Alarm Clock", forbidden: ["Wake up", "Time", "Morning", "Ring"] },
    { word: "Elevator", forbidden: ["Lift", "Building", "Floor", "Up"] },
    { word: "Mirror", forbidden: ["Reflection", "Glass", "Face", "Look"] },
    { word: "Backpack", forbidden: ["Bag", "School", "Books", "Shoulders"] },
    { word: "Keyboard", forbidden: ["Typing", "Computer", "Keys", "Letters"] },
    { word: "Sunglasses", forbidden: ["Eyes", "Sun", "Dark", "Wear"] },
    { word: "Wallet", forbidden: ["Money", "Cash", "Cards", "Pocket"] }
  ],

  College: [
    { word: "Exam", forbidden: ["Test", "Marks", "Question paper", "Study"] },
    { word: "Professor", forbidden: ["Teacher", "Lecture", "College", "Class"] },
    { word: "Attendance", forbidden: ["Present", "Absent", "Percentage", "Class"] },
    { word: "Homework", forbidden: ["Assignment", "School", "Teacher", "Submit"] },
    { word: "Canteen", forbidden: ["Food", "College", "Lunch", "Snacks"] },
    { word: "Library", forbidden: ["Books", "Read", "Quiet", "Borrow"] },
    { word: "Backbenchers", forbidden: ["Last row", "Students", "Class", "Friends"] },
    { word: "Timetable", forbidden: ["Schedule", "Period", "Subjects", "Time"] },
    { word: "Group Project", forbidden: ["Team", "Assignment", "Work", "Presentation"] },
    { word: "Graduation", forbidden: ["Degree", "Cap", "Certificate", "Finish"] }
  ],

  Chaos: [
    { word: "Alien", forbidden: ["Space", "Planet", "UFO", "Extraterrestrial"] },
    { word: "Zombie", forbidden: ["Dead", "Brain", "Monster", "Apocalypse"] },
    { word: "Time Machine", forbidden: ["Past", "Future", "Travel", "Clock"] },
    { word: "Dragon", forbidden: ["Fire", "Wings", "Mythical", "Fly"] },
    { word: "Invisible", forbidden: ["See", "Hidden", "Transparent", "Ghost"] },
    { word: "Black Hole", forbidden: ["Space", "Gravity", "Stars", "Universe"] },
    { word: "Robot", forbidden: ["Machine", "Metal", "AI", "Program"] },
    { word: "Vampire", forbidden: ["Blood", "Fangs", "Dracula", "Garlic"] },
    { word: "Teleportation", forbidden: ["Travel", "Instant", "Place", "Magic"] },
    { word: "Superpower", forbidden: ["Ability", "Hero", "Special", "Strength"] }
  ]
};

/* Fix card spelling/spacing in the data. */
QUESTIONS.Funny[5].word = "Hiccups";

const TEAM_COLORS = [
  "#FF7058", "#20A995", "#E4A923", "#5A8DEE",
  "#D66DB2", "#8B77D9", "#69A84F", "#E08A42",
  "#398EAA", "#C65C78"
];

/* =========================================
   GAME STATE
   ========================================= */

let teams = [];
let activeTeamIndex = 0;
let selectedCategory = "All";
let deck = [];
let deckPosition = 0;
let currentCard = null;
let timerValue = TURN_LENGTH;
let timerInterval = null;
let turnRunning = false;
let turnFinished = false;
let turnsCompleted = 0;
let totalCorrect = 0;
let totalTraps = 0;
let totalSkips = 0;
let sessionNumber = 0;

/* =========================================
   HTML ELEMENTS
   ========================================= */

const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const resultsScreen = document.getElementById("resultsScreen");

const jumpToSetup = document.getElementById("jumpToSetup");
const teamSetup = document.getElementById("teamSetup");
const teamNameInput = document.getElementById("teamNameInput");
const addTeamBtn = document.getElementById("addTeamBtn");
const teamList = document.getElementById("teamList");
const teamCount = document.getElementById("teamCount");
const categorySelect = document.getElementById("categorySelect");
const startGameBtn = document.getElementById("startGameBtn");
const setupMessage = document.getElementById("setupMessage");

const backToSetupBtn = document.getElementById("backToSetupBtn");
const endGameBtn = document.getElementById("endGameBtn");
const currentTeamName = document.getElementById("currentTeamName");
const turnSubtitle = document.getElementById("turnSubtitle");
const timerDisplay = document.getElementById("timerDisplay");
const timerBar = document.getElementById("timerBar");
const startTurnBtn = document.getElementById("startTurnBtn");
const categoryBadge = document.getElementById("categoryBadge");
const cardCounter = document.getElementById("cardCounter");
const secretWord = document.getElementById("secretWord");
const forbiddenWords = document.getElementById("forbiddenWords");
const correctBtn = document.getElementById("correctBtn");
const skipBtn = document.getElementById("skipBtn");
const trapBtn = document.getElementById("trapBtn");
const gameMessage = document.getElementById("gameMessage");
const scoreList = document.getElementById("scoreList");
const nextTeamBtn = document.getElementById("nextTeamBtn");

const roundNumber = document.getElementById("roundNumber");
const totalCorrectDisplay = document.getElementById("totalCorrect");
const totalTrapsDisplay = document.getElementById("totalTraps");
const totalSkipsDisplay = document.getElementById("totalSkips");

const winnerHeading = document.getElementById("winnerHeading");
const winnerSubtitle = document.getElementById("winnerSubtitle");
const finalLeaderboard = document.getElementById("finalLeaderboard");
const playAgainBtn = document.getElementById("playAgainBtn");
const newGameBtn = document.getElementById("newGameBtn");

/* =========================================
   SETUP AND TEAM MANAGEMENT
   ========================================= */

function showMessage(element, message, type = "") {
  element.textContent = message;
  element.className = "message";

  if (type) {
    element.classList.add(type);
  }
}

function addTeam() {
  const name = teamNameInput.value.trim();

  if (!name) {
    showMessage(setupMessage, "Enter a team name first.", "error");
    teamNameInput.focus();
    return;
  }

  if (teams.some(team => team.name.toLowerCase() === name.toLowerCase())) {
    showMessage(setupMessage, "That team name already exists.", "error");
    teamNameInput.focus();
    return;
  }

  teams.push({
    id: `${Date.now()}-${Math.random()}`,
    name,
    score: 0,
    color: TEAM_COLORS[(teams.length) % TEAM_COLORS.length]
  });

  teamNameInput.value = "";
  renderTeams();
  showMessage(setupMessage, `${name} added!`, "success");
  teamNameInput.focus();
}

function renderTeams() {
  teamList.replaceChildren();

  teams.forEach((team, index) => {
    const item = document.createElement("li");
    item.className = "team-item";

    const name = document.createElement("span");
    name.textContent = `${index + 1}. ${team.name}`;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-team-btn";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${team.name}`);

    remove.addEventListener("click", () => {
      teams.splice(index, 1);
      renderTeams();
      showMessage(setupMessage, "Team removed.");
    });

    item.append(name, remove);
    teamList.appendChild(item);
  });

  teamCount.textContent =
    `${teams.length} team${teams.length === 1 ? "" : "s"} added`;
}

jumpToSetup.addEventListener("click", () => {
  teamSetup.scrollIntoView({ behavior: "smooth", block: "start" });
  teamNameInput.focus({ preventScroll: true });
});

addTeamBtn.addEventListener("click", addTeam);

teamNameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTeam();
  }
});

/* =========================================
   DECK AND QUESTION SELECTION
   ========================================= */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function makeDeck() {
  const categories = selectedCategory === "All"
    ? Object.keys(QUESTIONS)
    : [selectedCategory];

  const cards = [];

  categories.forEach(category => {
    QUESTIONS[category].forEach(card => {
      cards.push({
        word: card.word.trim(),
        forbidden: [...card.forbidden],
        category
      });
    });
  });

  return shuffle(cards);
}

function drawCard() {
  if (deckPosition >= deck.length) {
    deck = makeDeck();
    deckPosition = 0;
  }

  currentCard = deck[deckPosition];
  deckPosition++;
  renderCard();
}

function renderCard() {
  if (!currentCard) return;

  secretWord.textContent = currentCard.word;
  categoryBadge.textContent = currentCard.category.toUpperCase();
  cardCounter.textContent = `Card ${deckPosition} / ${deck.length}`;
  forbiddenWords.replaceChildren();

  currentCard.forbidden.forEach(word => {
    const chip = document.createElement("span");
    chip.className = "forbidden-word";
    chip.textContent = word;
    forbiddenWords.appendChild(chip);
  });
}

/* =========================================
   START AND RESET GAME
   ========================================= */

function clearTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetStats() {
  turnsCompleted = 0;
  totalCorrect = 0;
  totalTraps = 0;
  totalSkips = 0;
  updateStats();
}

function updateStats() {
  roundNumber.textContent = turnsCompleted;
  totalCorrectDisplay.textContent = totalCorrect;
  totalTrapsDisplay.textContent = totalTraps;
  totalSkipsDisplay.textContent = totalSkips;
}

function startGame() {
  if (teams.length < 2) {
    showMessage(setupMessage, "Add at least two teams to begin.", "error");
    return;
  }

  clearTimer();
  sessionNumber++;
  selectedCategory = categorySelect.value;
  deck = makeDeck();
  deckPosition = 0;
  activeTeamIndex = 0;
  timerValue = TURN_LENGTH;
  turnRunning = false;
  turnFinished = false;

  teams.forEach(team => {
    team.score = 0;
  });

  resetStats();

  setupScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  drawCard();
  prepareTurn();
  renderScores();
  updateTimerDisplay();

  gameScreen.scrollIntoView({ behavior: "smooth", block: "start" });
}

startGameBtn.addEventListener("click", startGame);

/* =========================================
   TURN CONTROL AND TIMER
   ========================================= */

function prepareTurn() {
  clearTimer();

  turnRunning = false;
  turnFinished = false;
  timerValue = TURN_LENGTH;

  const team = teams[activeTeamIndex];

  if (!team) {
    finishGame();
    return;
  }

  currentTeamName.textContent = team.name;
  turnSubtitle.textContent = "Get ready to describe!";
  startTurnBtn.classList.remove("hidden");
  startTurnBtn.disabled = false;
  startTurnBtn.textContent = "Start Turn ▶";

  correctBtn.disabled = true;
  skipBtn.disabled = true;
  trapBtn.disabled = true;
  nextTeamBtn.classList.add("hidden");

  updateTimerDisplay();
  renderScores();
  showMessage(gameMessage, "When everyone is ready, start the timer.");
}

function updateTimerDisplay() {
  timerDisplay.textContent = timerValue;
  timerBar.style.width = `${(timerValue / TURN_LENGTH) * 100}%`;
  timerBar.classList.toggle("warning", timerValue <= 20 && timerValue > 10);
  timerBar.classList.toggle("urgent", timerValue <= 10);
}

function startTurn() {
  if (turnRunning || turnFinished) return;

  turnRunning = true;
  startTurnBtn.disabled = true;
  startTurnBtn.textContent = "Turn in progress…";
  turnSubtitle.textContent = "Describe the word. Don't say the forbidden words!";

  correctBtn.disabled = false;
  skipBtn.disabled = false;
  trapBtn.disabled = false;

  showMessage(gameMessage, "Good luck! Every second counts.");

  timerInterval = setInterval(() => {
    if (!turnRunning) return;

    timerValue = Math.max(0, timerValue - 1);
    updateTimerDisplay();

    if (timerValue <= 0) {
      endTurn("Time's up! ⏰");
    }
  }, 1000);
}

function endTurn(message) {
  if (turnFinished) return;

  clearTimer();
  turnRunning = false;
  turnFinished = true;
  turnsCompleted++;

  correctBtn.disabled = true;
  skipBtn.disabled = true;
  trapBtn.disabled = true;
  startTurnBtn.classList.add("hidden");

  turnSubtitle.textContent = "Turn completed!";
  showMessage(gameMessage, message, "success");

  nextTeamBtn.classList.remove("hidden");
  nextTeamBtn.textContent =
    activeTeamIndex === teams.length - 1
      ? "Start Next Round →"
      : "Next Team →";

  renderScores();
  updateStats();
}

startTurnBtn.addEventListener("click", startTurn);

/* =========================================
   CARD ACTIONS
   ========================================= */

function requireActiveTurn() {
  return turnRunning && !turnFinished && timerValue > 0;
}

correctBtn.addEventListener("click", () => {
  if (!requireActiveTurn()) return;

  teams[activeTeamIndex].score += 1;
  totalCorrect++;

  drawCard();
  renderScores();
  updateStats();
  showMessage(gameMessage, "Correct! +1 point. Next word! 🎉", "success");
});

skipBtn.addEventListener("click", () => {
  if (!requireActiveTurn()) return;

  totalSkips++;
  drawCard();

  updateStats();
  showMessage(gameMessage, "Skipped! No points lost. Next word.");
});

trapBtn.addEventListener("click", () => {
  if (!requireActiveTurn()) return;

  teams[activeTeamIndex].score -= 1;
  totalTraps++;

  drawCard();
  renderScores();
  updateStats();

  showMessage(gameMessage, "TRAPPED! −1 point. Watch your words! 🚫", "error");
});

/* =========================================
   SCOREBOARD
   ========================================= */

function renderScores(target = scoreList) {
  target.replaceChildren();

  const sorted = teams
    .map((team, index) => ({ ...team, originalIndex: index }))
    .sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);

  sorted.forEach((team, rank) => {
    const row = document.createElement("div");
    row.className = "score-row";

    if (
      target === scoreList &&
      team.originalIndex === activeTeamIndex
    ) {
      row.classList.add("active-team");
    }

    const rankElement = document.createElement("span");
    rankElement.className = "rank";
    rankElement.textContent = rank === 0 ? "🏆" : rank + 1;

    const name = document.createElement("span");
    name.className = "score-name";
    name.textContent = team.name;

    const points = document.createElement("span");
    points.className = "score-points";
    points.textContent = team.score;

    row.append(rankElement, name, points);
    target.appendChild(row);
  });
}

/* =========================================
   TEAM ROTATION
   ========================================= */

nextTeamBtn.addEventListener("click", () => {
  if (!turnFinished) return;

  if (activeTeamIndex >= teams.length - 1) {
    activeTeamIndex = 0;
  } else {
    activeTeamIndex++;
  }

  prepareTurn();
});

/* =========================================
   END GAME AND RESULTS
   ========================================= */

function finishGame() {
  clearTimer();
  turnRunning = false;
  turnFinished = true;

  gameScreen.classList.add("hidden");
  setupScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  const highestScore = Math.max(...teams.map(team => team.score));
  const winners = teams.filter(team => team.score === highestScore);

  if (winners.length === 1) {
    winnerHeading.textContent = `${winners[0].name} wins!`;
    winnerSubtitle.textContent =
      `Champion with ${highestScore} point${highestScore === 1 ? "" : "s"}! 🎉`;
  } else {
    winnerHeading.textContent = "It's a tie!";
    winnerSubtitle.textContent =
      `${winners.map(team => team.name).join(" & ")} share the top spot with ${highestScore} points!`;
  }

  renderScores(finalLeaderboard);
  resultsScreen.scrollIntoView({ behavior: "smooth", block: "start" });
}

endGameBtn.addEventListener("click", () => {
  if (confirm("End the game and show the final leaderboard?")) {
    finishGame();
  }
});

playAgainBtn.addEventListener("click", () => {
  startGame();
});

newGameBtn.addEventListener("click", () => {
  clearTimer();

  teams = [];
  activeTeamIndex = 0;
  deck = [];
  deckPosition = 0;
  currentCard = null;
  turnRunning = false;
  turnFinished = false;

  renderTeams();
  showMessage(setupMessage, "Add your teams to start a new game.");

  resultsScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");

  teamSetup.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* =========================================
   RETURN TO SETUP
   ========================================= */

backToSetupBtn.addEventListener("click", () => {
  if (turnRunning && !confirm("Leave the current turn? Its timer will stop.")) {
    return;
  }

  clearTimer();
  turnRunning = false;

  gameScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");

  showMessage(
    setupMessage,
    "Your team names are saved for this browser session. Starting again resets scores."
  );

  teamSetup.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* Initial screen */
renderTeams();
updateStats();
