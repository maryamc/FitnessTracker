const path = require('path');

module.exports = function(app) {
    // routes to index which is homepage
    app.get("/", (req, res)=> {
        res.sendFile(path.join(__dirname, "index.html"));
    });

    //routes to exercise page
    app.get("/exercise", (req,res)=> {
        res.sendFile(path.join(__dirname,"../public/exercise.html"));
    });

    // routes to user stats
    app.get("/stats", (req,res )=> {
        res.sendFile(path.join(__dirname,"../public/stats.html"))
    });
}