
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify
    // 1. iterate through the array of flowers
    // 2. add a conditional statment checking if the price of flowers is less than $2.00.
    // 3. return flowers that are less than 2.00 to the array of filtered flowers
    for (const flower of flowers) {
        if (flower.price < 2.00) { //price property, has a data value of less than 2
            filteredFlowers.push(flower)
        }
    }
    // Write your algorithm first, and then your code. Feel free to remove this comment
    return filteredFlowers  // Do not modify
}

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify
    // 1. iterate through the array of flowers
    // 2. add a conditional statment checking if the flowers grow USDA time zone 3 and 8 using the .includes method 
    // 3. return flowers that are Orange to filteredFlowers.
    for (const flower of flowers) {
        if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
            filteredFlowers.push(flower)
        }
    }
    // Write your algorithm first, and then your code. Feel free to remove this comment
    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
    // 1. iterate through the array of flowers
    // 2. add a conditional statment checking if the color of flowers is "Orange".
    // 3. return flowers that are less than 2.00 to the array of filtered flowers
    for (const flower of flowers) {
        if (flower.colors.includes("Orange")) {  //if (flower.colors === "Orange")
            filteredFlowers.push(flower)
        }
    }

    // Write your algorithm first, and then your code. Feel free to remove this comment




    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.
 
    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>
 
            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>
 
            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify
    // 1. iterate through the array of flowers
    // 2. add string interpolation to return the array in HTML elements
    // 3. push string to flowersHTMLString
    for (const flower of flowers) {
        flowersHTMLString += `<article>\n\t<h1>${flower.type}</h1>\n\n\t<h2>${"Colors"}</h2>\n\t<section>${flower.colors.join('<section>\n\t</section>')}</section>\n\n\t<h2>${"USDA Zones"}</h2>\n\t<div>${flower.usdaZones.join('<div>\n\t</div>')}</div>\n</article>\n`
    }


    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */


    return flowersHTMLString  // Do not modify
}

console.log(flowersAsHTML())














































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

