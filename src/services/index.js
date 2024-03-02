const mysql = require('mysql2/promise');

const execute = async (sql) => {
    const config = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'museu_db',
<<<<<<< HEAD
        port: 3307
=======
        port: 3306
>>>>>>> 07481add41dd9482bf857751fdde56de3d58d8e2
    });

    let [results] = await config.query(sql);

    return results;
}

module.exports = {
    execute
<<<<<<< HEAD
} 
=======
}
>>>>>>> 07481add41dd9482bf857751fdde56de3d58d8e2
