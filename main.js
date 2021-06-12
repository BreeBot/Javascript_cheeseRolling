// generate a random integer between 10 and 60
let generateRandomRolltime = () => {
  return Math.floor(Math.random() * (60 - 10 + 1) + 10)
}

let rawDataArray = [
  {
    cheeseName: 'Red Leicester',
    cheeseDeliciousness: 9,
    contestantName: 'John C',
    contestantHunger: 8
  },
  {
    cheeseName: 'Tilsit',
    cheeseDeliciousness: 3,
    contestantName: 'Michael P',
    contestantHunger: 10
  },
  {
    cheeseName: 'Caerphilly',
    cheeseDeliciousness: 5,
    contestantName: 'Eric I',
    contestantHunger: 2
  },
  {
    cheeseName: 'Bel Paese',
    cheeseDeliciousness: 4,
    contestantName: 'Graham C',
    contestantHunger: 4
  },
  {
    cheeseName: 'Red Windsor',
    cheeseDeliciousness: 9,
    contestantName: 'Terry G',
    contestantHunger: 6
  },
  {
    cheeseName: 'Stilton',
    cheeseDeliciousness: 7,
    contestantName: 'Terry J',
    contestantHunger: 1
  },
  {
    cheeseName: 'Gruyere',
    cheeseDeliciousness: 2,
    contestantName: 'Carol C',
    contestantHunger: 6
  }
]

let registerContestants = (data) => {
  let contestantsArray = data.map(entry => {
    let contestantObject = {
      name: entry.contestantName,
      hunger: entry.contestantHunger,
      cheese: {
       name: entry.cheeseName,
       deliciousness: entry.cheeseDeliciousness     
    },
    disqualified:false,
    results: []
    }
    return contestantObject
  })
  return contestantsArray
}

////method: check for cheese eating

let checkForCheeseEating = (contestant) => {
  let avg = ((contestant.hunger + contestant.cheese.deliciousness)/2)
  if (avg >= 7) {
    contestant.disqualified = true
  } 
}


//roll dat cheese

let rollDatCheese = (contestant) => {
  checkForCheeseEating(contestant)
  if (contestant.disqualified = true){
    contestant.results.push(generateRandomRolltime)
  }
}



const reportIndividualResults = (contestant) => {
  rollDatCheese(contestant)
  if (contestant.results.length > 0) {
    let resultsForReport = contestant.results.join(",")
   console.log(`Contestant ${contestant.name} entered this competition with \
a lovely ${contestant.cheese.name} cheese. By meeting the criteria, \
they were able to compete with resultings scores of ${resultsForReport}`)
  } else {
    console.log(`${contestant.name} was disqualified!`)
  }
}

let contestants = registerContestants(rawDataArray);

contestants.forEach(contestant => {
  for(i=0; i < 3; i ++){
    rollDatCheese(contestant)
  }
})

contestants.forEach(contestant => {
reportIndividualResults(contestant)
})
