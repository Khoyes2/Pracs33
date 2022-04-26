exports.shows = (req,res) => {
    res.json({
        shows:[
            {
                id: 1,
                Name: "Attack On Titan",
                Episodes: 100,
                Airing: "False",
                mangaFinished: "True"
            },
            {
                id: 2,
                Name: "Hunter Hunter",
                Episodes: 148,
                Airing: "False",
                mangaFinished: "False"
            },
            {
                id: 3,
                Name: "Spy x Family",
                Episodes: 3,
                Airing: "True",
                mangaFinished: "False"
            },
            {
                id: 4,
                Name: "Re Zero",
                Episodes: 38,
                Airing: "False",
                mangaFinished: "True"
            }
        ]
    })
}
