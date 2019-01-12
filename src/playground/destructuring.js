// const person = {
//     name: 'Simon',
//     age: 28,
//     location: {
//         city: 'Taipei',
//         temp: 85 
//     }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
//     title: '1984',
//     author: 'George Orwell',
//     publisher: {
//         name: 'Harper Collins'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


//
//  Array Destructuring
//

// const address = ['1299 Juniper Street', 'New York', 'Maryland', '19147'];

// const [ , city, state ] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);
