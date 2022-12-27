const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost/team_manager_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(()=> console.log("Established a connection to the database"))
    .catch(()=> console.log("Something went wrong when connecting to the database",
err));