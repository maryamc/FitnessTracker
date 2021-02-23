const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//workout schema will provide the table that will be seeded in the db
const workoutSchema = new Schema({
    day: {
        // shows and updates the date of workout
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            distance:{
                type:Number
            },
            duration:{
                type:Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout",workoutSchema);

//exporting to "import" to index.js
module.exports = Workout;