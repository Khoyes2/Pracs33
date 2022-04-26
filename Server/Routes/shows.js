const express = require ("express")
const router = express.Router()
const {shows} = require ("../Controller/shows")

router.get("/shows", shows)

module.exports = router