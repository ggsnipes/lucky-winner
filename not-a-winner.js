//use this to find out who to pick on for demonstrations (please don't)

//list of students (not sure if this is all of them)
let names = ['Akram', 'Amal', 'Aung', 'Bilal', 'Caleb', 'Carl', 'Cicero',
    'Deepa', 'Deepali', 'Dimitri', 'Falko', 'Frances', 'Henry', 'Iffath', 'Jack', 'Kevin', 'Leon',
    'Mike', 'Mindy', 'Whoopi', 'Nikki', 'Simon', 'Stefanus', 'Tales', 'Taz (Mohammed)', 'Tom', 'Maria']

//picks the person and tells me who it is
function luckyWinner(array) {
    let ranNum = Math.floor(Math.random() * array.length)

    console.log(`Lucky winner is ${array[ranNum]}!!!!!1!`)
}

//calling the function
luckyWinner(names)

