const express = require ("express")
const showsRoute = require ("./Routes/shows")
const app = express()

app.use("/api", showsRoute)
    

app.listen (3031, () => console.log ("Server running on port 3031"))