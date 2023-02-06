function gameObject(gameInfo){
    const statistics = { 
        // This variable starts out with just home and away team info with an empty "players" value to fill in by the function later
        home: {
            teamName: gameInfo["home"]["name"],
            colors: gameInfo["home"]["colors"],
            players:{}
        },
        away: {
            teamName: gameInfo["away"]["name"],
            colors: gameInfo["away"]["colors"],
            players:{}
        }
    }

    function playerStats(gameInfo){
        //The below two for loops do the same thing, but one is for the home team and one is for the away team
        //It loops through each player in the passed in argument
        //Assigns the player's name to a keyword
        //Creates a new key-value pair inside of the statistics[home][players] key
        //Deletes the "name" key-value pair once it's in the statistics table since it's no longer needed
        for(let player in gameInfo["home"]["players"]){
            let playerName = gameInfo["home"]["players"][player]["name"];
            statistics["home"]["players"][gameInfo["home"]["players"][player]["name"]] = gameInfo["home"]["players"][player];
            delete statistics["home"]["players"][playerName]["name"];
        }
        for(let player in gameInfo["away"]["players"]){
            let playerName = gameInfo["away"]["players"][player]["name"];
            statistics["away"]["players"][gameInfo["away"]["players"][player]["name"]] = gameInfo["away"]["players"][player];
            delete statistics["away"]["players"][playerName]["name"];
        }
    }

    playerStats(gameInfo);

    return statistics;
  }

function numPointsScored(playerName, gameInfo){
    for(let homeAway in gameInfo){
        for(let player in gameInfo[homeAway]["players"]){
            if(playerName.toLowerCase() === gameInfo[homeAway]["players"][player]["name"].toLowerCase()){
                return gameInfo[homeAway]["players"][player]["name"] + " scored " + gameInfo[homeAway]["players"][player]["points"] + " points.";
                break;
            };
        };
    };
}

function shoeSize(playerName, gameInfo){
    for(let homeAway in gameInfo){
        for(let player in gameInfo[homeAway]["players"]){
            if(playerName.toLowerCase() === gameInfo[homeAway]["players"][player]["name"].toLowerCase()){
                return gameInfo[homeAway]["players"][player]["name"] + " has a shoe size of " + 
                gameInfo[homeAway]["players"][player]["shoe"] + ".";
                break;

            };
        };
    };
}

function teamColors(teamName, gameInfo){
    for(let homeAway in gameInfo){
        if(gameInfo[homeAway]["name"].toLowerCase() === teamName.toLowerCase()){
            return gameInfo[homeAway]["colors"];
        }
    }
}

function teamNames(gameInfo){
    const teams = [];
    for(let homeAway in gameInfo){
          teams.push(gameInfo[homeAway]["name"]);  
    }
    return teams;
}

function playerNumbers(teamName, gameInfo){
    const numbers = [];
    for(let homeAway in gameInfo){
        if(teamName.toLowerCase() === gameInfo[homeAway]["name"].toLowerCase()){
            for(let player in gameInfo[homeAway]["players"]){
                numbers.push(gameInfo[homeAway]["players"][player]["number"]);
            }
        }
    }
    return numbers;
}

function playerStats(playerName, gameInfo){
    for(let homeAway in gameInfo){
        for(let player in gameInfo[homeAway]["players"]){
            if(playerName.toLowerCase() === gameInfo[homeAway]["players"][player]["name"].toLowerCase()){
                return gameInfo[homeAway]["players"][player];
            };
        };
    };
}

function bigShoeRebounds(gameInfo){
    const shoeSize = [];
    for(let homeAway in gameInfo){
        for(let player in gameInfo[homeAway]["players"]){
            shoeSize.push(gameInfo[homeAway]["players"][player]["shoe"])
        }
    }

    for(let homeAway in gameInfo){
      for(let player in gameInfo[homeAway]["players"]){
        if(Math.max(...shoeSize) === gameInfo[homeAway]["players"][player]["shoe"]){
                return gameInfo[homeAway]["players"][player]["rebounds"];
            }
        }
    }
}

function mostPointsScored(gameInfo){
    const scores = [];
    for(let homeAway in gameInfo){
        for(let player in gameInfo[homeAway]["players"]){
            scores.push(gameInfo[homeAway]["players"][player]["points"])
        }
    }

    for(let homeAway in gameInfo){
        for(let player in gameInfo[homeAway]["players"]){
          if(Math.max(...scores) === gameInfo[homeAway]["players"][player]["points"]){
                  return gameInfo[homeAway]["players"][player]["name"];
              }
          }
      }
}

function winningTeam(gameInfo){
    const scores = {};
    for(let homeAway in gameInfo){
      scores[homeAway] = 0;
        for(let player in gameInfo[homeAway]["players"]){
          scores[homeAway] += gameInfo[homeAway]["players"][player]["points"];
        }
    }

  const scoreArray = Object.values(scores);

  for(let homeAway in scores){
    if(scores[homeAway] === Math.max(...scoreArray)){
      return gameInfo[homeAway]["name"] + " won with " +
        "a score of " + Math.max(...scoreArray);
    }
  }
}

function teamWithLongestName(gameInfo){
    teamNameLength = {};
    for(let homeAway in gameInfo){
        for(let teamName in gameInfo[homeAway]["name"]){
            teamNameLength[homeAway] = gameInfo[homeAway]["name"].length;
        }
    }
  for(let homeAway in teamNameLength){
      if(teamNameLength[homeAway] === Math.max(...Object.values(teamNameLength))){
            return gameInfo[homeAway]["name"];
        }
    }
}

function doesLongNameStealATon(gameInfo){
    const longestName = teamWithLongestName(gameInfo);
    const steals = {};

    for(let homeAway in gameInfo){
        steals[homeAway] = {};
        steals[homeAway]["steals"] = 0;
        steals[homeAway]["name"] = "";
          for(let player in gameInfo[homeAway]["players"]){
            steals[homeAway]["name"] = gameInfo[homeAway]["name"]
            steals[homeAway]["steals"] += gameInfo[homeAway]["players"][player]["steals"];
          }
      }

    for(let homeAway in steals){
        if(steals[homeAway]["name"] === longestName)
        {
            return "The team with the longest name had the most steals.";
        }
    }
    
}

const gameStats = 
    {home: 
        {name: "Brooklyn Nets", colors: "Black, White", players: 
            [{name: "Alan Anderson", number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1}, 
            {name: "Reggie Evans", number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7},
            {name: "Brook Lopez", number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15},
            {name: "Mason Plumlee", number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5},
            {name: "Jason Terry", number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1}]},

    away:
        {name: "Charlotte Hornets", colors: "Turquoise, Purple", players: 
            [{name: "Jeff Adrien", number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2}, 
            {name: "Bismak Biyombo", number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10},
            {name: "DeSanga Diop", number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5},
            {name: "Ben Gordon", number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0},
            {name: "Brendan Haywood", number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12}]}};

gameObject(gameStats);