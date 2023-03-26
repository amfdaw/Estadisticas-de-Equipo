const team = {
  _players: [
    { firstName: "Vinicius", lastName: "Junior", age: 22 },
    { firstName: "Rodrygo", lastName: "Goes", age: 22 },
    { firstName: "Luka", lastName: "Modric", age: 37 },
  ],
  _games: [
    { opponent: "Mallorca", teamPoints: 55, opponentPoints: 36 },
    { opponent: "Barcelona", teamPoints: 55, opponentPoints: 58 },
    { opponent: "Cádiz", teamPoints: 55, opponentPoints: 31 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Ath Bilbao", 61, 44);

console.log(team.games);
