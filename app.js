const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must specify a name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "Pretty solid as a fruit"
// });

// //fruit.save();


// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The best fruit"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Too sour for me"
// });

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weird texture"
// });

// const pineapple = new Fruit({
//     name: "Pineapple",
//     rating: 10,
//     review: "Too tasty"
// });


// pineapple.save();

const tomato = new Fruit({
    name: "Tomato",
    rating: 10,
    review: "Good fruit"
});

tomato.save();


const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitsSchema
});



// Fruit.deleteOne({ name: "Kiwi" }, function(err) {
//     console.log(err);
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log.apply(err);
//     } else {
//         console.log("Success");
//     }
// });

// Fruit.find(function(err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         fruitsList = [];

//         fruits.forEach(fruit => fruitsList.push(fruit.name));

//         console.log(fruitsList);

//         mongoose.connection.close();
//     }
// })

const Person = mongoose.model("Person", peopleSchema);

Person.updateOne({ _id: "60aa5c150e4519f7bcc0fc36" }, { favoriteFruit: tomato }, function(err) {
    if (err) {
        console.log(err);
    }
});


// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favoriteFruit: pineapple
// });

// person.save();