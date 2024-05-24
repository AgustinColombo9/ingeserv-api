const {Router } = require('express');
const router = Router();

// devuelve al llamar a pagina principal
router.get('/', (req, res) => {
    //res.send("Hello world");
    //res.json({"Title": "Hello world"});

    const data = {
        "name": "AGUSTIN",
        "lastname": "COLOMBO"
    };
    res.json(data);
})

module.exports = router;