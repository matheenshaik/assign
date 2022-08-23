const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

const carController= require("../controllers/carController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//author
router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

//book
router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//cars
router.post("/Cars", carController.Cars)
router.post("/CarDetail", carController.CarDetails)
router.get("/CarsData", carController.getCarData)


module.exports = router;