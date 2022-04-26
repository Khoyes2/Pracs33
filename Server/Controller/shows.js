exports.shows = (req,res) => {
    res.json({
        shows:[
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
}
