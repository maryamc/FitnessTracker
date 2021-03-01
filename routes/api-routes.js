const db = require("../models");

module.exports = function(app){
    //doing get request
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then((data)=>{
            res.json(data);
        }).catch(err => {
            console.log(err)
        });
    });

    //POST request
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then((data) => {
            res.json(data);
        }).catch(err =>{
            console.log(err)
        });
    });

    