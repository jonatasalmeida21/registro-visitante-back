const DB = require('../services/index');

const visitantesPorGenero = async () => {
<<<<<<< HEAD
    return  await DB.execute("select count(*) as total, visitante_genero as genero from visitantes group by visitante_genero;");
}

const totalVisitas = async () => {
    return await DB.execute("SELECT COUNT(*) AS total FROM visitantes;");
}


module.exports = {
    visitantesPorGenero,
    totalVisitas
};
=======
    return await DB.execute("select count(*) as total, visitante_genero as genero from visitantes group by visitante_genero;");
}

module.exports = {
    visitantesPorGenero
}
>>>>>>> 07481add41dd9482bf857751fdde56de3d58d8e2
