// var fs = require("fs")

// fs.readFile("jour07.txt", function(err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString())
// })


// fs.writeFile("jour07.txt", "Me llamo Eloi", function (err) {
//     if (err) {
//        return console.error(err);
//     }})

//     console.log("Et voilà ! Voyons le résultat :");


// fs.unlink("jour07.txt", function (err){
//     if (err) {
//         return console.error(err);
//     }})

//     console.log("Et voilà ! Voyons le résultat :");

// var array = [1, 2, 3, 4, 5]
// var doubles = array.map(function(num) {
//     return num * 2
//    })
// console.log(doubles)

// var longNames = [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]

// var shortNames = longNames.map(function(person) {
//     return {
//         name: `${person.firstName} ${person.lastName}`,
//       }
//     })

//     console.log(shortNames)

// var array = [1, "toto", 34, "javascript", 8]
// var numbers = array.filter(function(num){
//     return (typeof num === "number")
// })

// console.log(numbers)

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// var even = numbers.filter(function(even){
//     return even % 2 === 0
// })

// console.log(even)

// var cakes = [
// 	{
// 		name: "cake",
// 		flavor: "vanilla",
// 		status: "available"
// 	},
// 	{
// 		name: "brownie",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// 	{
// 		name: "pie",
// 		flavor: "strawberry",
// 		status: "available"
// 	},
// 	{
// 		name: "muffin",
// 		flavor: "pistachio",
// 		status: "available"
// 	},
// 	{
// 		name: "donut",
// 		flavor: "chocolate",
// 		status: "available"
// 	},
// ]


// var chocolate = cakes.filter(function(cake) {
//         return cake.flavor === "chocolate"
// })

// var soldOut = chocolate.map (function(index) {
//     index.status = "SoldOut !"
//     return index
// })

// console.log(soldOut)

var prompt = require('prompt');
const randomWordFR = require('random-word-fr');

var random = randomWordFR()
console.log(random)
var letters = random.split("")



// var attempts = 10

prompt.start()

function play() {
  prompt.get({ name: "input", description: `Trouver les lettres présentes dans le mot mystère`}, function(err, result) {
    
    if (result.input === random) {
        console.log("Bravo")
    }

    if (result.input.length !== 1) {
        console.log("Pas le bon nombre de lettres")
        play()
    }

    var str = []
    

    letters.forEach(function(letter){
        var res = result.input
        if (letters.includes(letter)) {
            str = str + res
        } else {
            str = str + "_"
        }
    })
    
    console.log(str)

    play()
  })}

  play ()