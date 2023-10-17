const knex = require('knex')

const db = knex({
    client: "pg",
    connection:{
        host:'trumpet.db.elephantsql.com',
        port:5432,
        user:'kicsbbhb',
        password:'JXcQ78Ffy6s8Ispu_oO85tXznzS803Q8',
        database:'kicsbbhb'
    }
});

module.exports = db;