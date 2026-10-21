
"use strict";

// Word Trap: initial team setup
const teams = [];

const startSetupBtn = document.getElementById("startSetupBtn");
const setupSection = document.getElementById("setupSection");
const teamNameInput = document.getElementById("teamNameInput");
const addTeamBtn = document.getElementById("addTeamBtn");
const teamList = document.getElementById("teamList");
const continueBtn = document.getElementById("continueBtn");
const setupMessage = document.getElementById("setupMessage");

function showMessage(message, type = "") {
  setupMessage.textContent = message;
  setupMessage.className = "message";

  if (type) {
    setupMessage.classList.add(type);
  }
}

function renderTeams() {
  teamList.replaceChildren();

  teams.forEach(function (team, index) {
    const item = document.createElement("li");
    item.className = "team-item";

    const name = document.createElement("span");
    name.textContent = `${index + 1}. ${team.name}`;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-team-btn";
    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `Remove ${team.name}`);

    removeButton.addEventListener("click", function () {
      teams.splice(index, 1);
      renderTeams();
      showMessage("Team removed.");
    });

    item.append(name, removeButton);
    teamList.appendChild(item);
  });
}

function addTeam() {
  const name = teamNameInput.value.trim();

  if (!name) {
    showMessage("Please enter a team name.", "error");
    teamNameInput.focus();
    return;
  }

  const duplicate = teams.some(function (team) {
    return team.name.toLowerCase() === name.toLowerCase();
  });

  if (duplicate) {
    showMessage("That team name is already being used.", "error");
    teamNameInput.focus();
    return;
  }

  teams.push({
    id: Date.now() + Math.random(),
    name: name,
    score: 0
  });

  teamNameInput.value = "";
  renderTeams();
  showMessage(`${name} added successfully!`, "success");
  teamNameInput.focus();
}

startSetupBtn.addEventListener("click", function () {
  setupSection.classList.remove("hidden");
  setupSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  teamNameInput.focus();
});

addTeamBtn.addEventListener("click", addTeam);

teamNameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTeam();
  }
});

continueBtn.addEventListener("click", function () {
  if (teams.length < 2) {
    showMessage("Add at least 2 teams before continuing.", "error");
    return;
  }

  // The full game screen will be connected in the next step.
  showMessage(
    `${teams.length} teams are ready! The word game screen is coming in the next step.`,
    "success"
  );

  console.log("Word Trap teams:", teams);
});
