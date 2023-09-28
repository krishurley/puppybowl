console.log('Hello!')
debugger;
const playerContainer = document.getElementById('all-players-container')
const newPlayerFormContainer = document.getElementById('new-player-form')

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-ACC-ET-WEB-PT-C'
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
// HTML DIVS
// <!-- form to add new players -->
// <div id="new-player-form"></div>

// <!-- container for all players -->
// <div id="all-players-container"></div>

// /api/COHORT-NAME/players

    const fetchAllPlayers = async () => {
  try {
    const response = await fetch(APIURL + 'players')
    const result = await response.json()
    console.log(result)

  } catch (err) {
    console.error('Uh oh, trouble fetching players!', err)
  }
}

// /api/COHORT-NAME/players/PLAYER-ID
const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(APIURL + 'players/' + playerId)
    const result = await response.json()
    console.log(result)
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err)
  }
}

// /api/COHORT-NAME/players/
const addNewPlayer = async (playerObj) => {
  try {
    const body = JSON.stringify(playerObj)
    const headers = { 'Content-Type': 'application/json' }
    const method = 'POST'

    const response = await fetch(APIURL + 'players', { method, headers, body })
    const result = await response.json()

    console.log(result)
  } catch (err) {
    console.error('Oops, something went wrong with adding that player!', err)
  }
}

// /api/COHORT-NAME/players/PLAYER-ID
const removePlayer = async (playerId) => {
  try {
    const response = await fetch(APIURL + 'players/' + playerId, {
      method: 'DELETE'
    })
    const result = await response.json()
    console.log(result)
  } catch (err) {
    console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err)
  }
}

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players.
 *
 * Then it takes that larger string of HTML and adds it to the DOM.
 *
 * It also adds event listeners to the buttons in each player card.
 *
 * The event listeners are for the "See details" and "Remove from roster" buttons.
 *
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player.
 *
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster.
 *
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
  try {
    debugger 
    // [player1, player2, player3]
    playerList.forEach((player) => {
    let playerElement = document.createElement('div');
    playerElement.innerHTML =
       <span>${player.name}</span>
       <br>
       <span>${player.breed}</span>
       <br>

    playerContainer.appendChild(playerElement);
})

  } catch (err) {
    console.error('Uh oh, trouble rendering players!', err)
  }
}

/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
  try {
  } catch (err) {
    console.error('Uh oh, trouble rendering the new player form!', err)
  }
}

const init = async () => {
  const players = await fetchAllPlayers()
  renderAllPlayers(players)

  renderNewPlayerForm()
}

init()