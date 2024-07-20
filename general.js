let profile = ["Festus", 19, true]

for (let i = 10; i <= 100; i += 10) {
    console.log(i)
}

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}

let sentence = ["Hello", "my", "name", "is", "Festus"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)

function totalRaceTime() {
    Total = player1Time + player2Time
    return Total
}

raceTimeSum = totalRaceTime()
console.log(raceTimeSum)

/*let dRandom = Math.random() * 6
console.log(dRandom)

let flooredNumbers = Math.floor(4.878)
console.log(flooredNumbers)

function rollDice() {
    let roundedRandom = (Math.floor( Math.random() * 6 )) + 1
    return roundedRandom
}

console.log(rollDice())*/

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}


console.log(course.tags)

let airBnb = {
    castle1: {
        name: "armagedon",
        free: false,
        cost: 200,
        space: ["room2", "room9"]
    },

    castle2: {
        name: 'greenland',
        free: true,
        cost: 0,
        space: ["room1", "room3", "room5"]
    }
}

console.log(airBnb.castle1.name + ", " + airBnb.castle1.free)
console.log(airBnb.castle2.name + ", " + airBnb.castle2.free + ", " + airBnb.castle2.space[2])

let tutor = {
    name: "Per",
    chips: 200,
    sayHello: function () {
        console.log("Heisann!")
    }
}

tutor.sayHello()

let myData = {
    name: "Festus",
    age: 19,
    country: 'Nigeria'
}

function logData() {
    console.log(myData.name + " is " + myData.age + " and lives in " + myData.country)
}

logData()

let age = 18

function busPaymentByAge() {
    if (age < 6) {
        return "Free"
    } else if (age <= 17) {
        return "Child discount"
    } else if (age <= 26) {
        return "Student discount"
    } else if (age <= 66) {
        return "Full Price"
    } else if (age > 66) {
        return "Senior citizen discount"
    } else {
        return "An error occurred!"
    }
}

console.log(busPaymentByAge())

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("-" + largeCountries[i])
}

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries2.pop()
largeCountries2.shift()

largeCountries2.push("Pakistan")

largeCountries2.unshift("China")
console.log(largeCountries2)

let hands = ["rock", "paper", "scissor"]

let playRandom = Math.floor(Math.random() * 3)

console.log(hands[playRandom])