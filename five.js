const team = {
     _players :[
        {
            firstName:"",
            lastName: "",
            age:25

        },
        {
            firstName: "Jane",
            lastName: "Smith",
            age: 22
          },
    
          {
            firstName: "Bob",
            lastName: "Johnson",
            age: 28
          }
    
    
    ],
     _games : [
        {
            opponent:"TeamA",
             teamPoints:20,
              opponentPoints: 18  
        },

        {
            opponent:"TeamB",
             teamPoints:22,
              opponentPoints: 25, 
        },

        {
            opponent:"TeamC",
             teamPoints:25,
              opponentPoints: 30, 
        }

     ],
     get players(){
        return this._players
     },

     get games(){
        return this._games
     },
     
     addPlayer(newFirstName,newLastName, newAge){
        const newPlayer = {
            firstName:newFirstName,
            lastName: newLastName,
             age: newAge,
        };
        this._players.push(newPlayer);

     },
     addGame(newOpponent, newTeamPoints, newOpponentPoints){
       const newGame = {
        opponent:newOpponent,
        teamPoints:newTeamPoints,
         opponentPoints:newOpponentPoints,
       } ;
       this._games.push(newGame);

     }
    

};
team.addPlayer('Bugs', 'Bunny',76);
team.addGame('tinas', 100,98)
console.log(team.players);
console.log(team._games);
