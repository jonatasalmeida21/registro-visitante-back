const express = require('express');
const router = express.Router();
const controller = require('../controller/visitanteController');

<<<<<<< HEAD
router.get("/total-por-genero", async (req , res) => {
    res.send(await controller.visitantesPorGenero());
});

router.get("/totalVisitas", async (req , res) => {
    res.send(await controller.totalVisitas());
});

module.exports = router; 
=======
router.get("/total-por-genero", async (req, res) => {
    res.send(await controller.visitantesPorGenero());
})

module.exports = router;
>>>>>>> 07481add41dd9482bf857751fdde56de3d58d8e2
