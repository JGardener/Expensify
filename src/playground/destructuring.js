// Object Destructing

/*
const person = {
    name: "James",
    age: 29,
    location: {
        city: "London",
        temp: 18
    }
}


const {name, age} = person;

console.log(`${name} is ${age}`)
console.log(`It's ${person.location.temp} in ${person.location.city}`)


With destructuring, I can rename a key as it comes in
temp is a little awkward, I'd rather use the full word. I rename it from temp to temperature as it comes in
Now, if I use temp in my console.log, it wouldn't work. I have to use temperature

const {city, temp: temperature} = person.location;

if(city && temperature){
    console.log(`It is ${temperature}C in ${city} today. This is destructured.`)
}


const book = {
    title: 'Ego is the Enemy',
    author: "Ryan Holiday",
    publisher: {
        // name: 'Penguin'
    }
}


const {title, author} = book;
console.log(`${title} is the name of the book I'm reading. It's by ${author}!`);

const {name: publisherName = "self-published"} = book.publisher;
console.log(`The book is ${publisherName}`)
*/

/*
Array Destructuring

const address = ["Person House, Lycan Lane", "Lycania", "LY23 5N6"];
console.log(`You're currently at ${address[1]} in ${address[2]}`)

Sadly, this doesn't scale well. Let's destructure it. 


const address = ["Person House, Lycan Lane", "Lycania", "LY23 5N6"];
const [street, city, postcode] = address; 

console.log(`You are in ${street} located within ${city}. The postcode is ${postcode}`)

You are unable to use renaming of values, because you're using an array,
but you can still provide default values if you wish

*/

const item = ["Coffee (hot)","$2.00", "$2.50", "$2.75"]

// The challenge is to grab the first and third items using array destructuring
const [itemName, , mediumPrice] = item; 

console.log(`A medium ${itemName} costs ${mediumPrice}`);

// Profit!