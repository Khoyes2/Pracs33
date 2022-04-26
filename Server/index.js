const express = require ("express")
const app = express()

app.get("/", (req,res) => {
    res.json({
        Shows:[
            {
                id: 1,
                Name: "Attack On Titan",
                Episodes: 100,
                Airing: "False"
            },
            {
                id: 2,
                Name: "Hunter Hunter",
                Episodes: 126,
                Airing: "False"
            },
            {
                id: 3,
                Name: "Spy x Family",
                Episodes: 3,
                Airing: "True"
            }
        ]
    })
})

app.listen (3031, () => console.log ("Server running on port 3031"))