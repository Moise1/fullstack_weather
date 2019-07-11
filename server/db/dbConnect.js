import pool from "./index";

pool.on("connect", () => {
    console.log('DB Connected!')
});

const tables = `
            CREATE TABLE IF NOT EXISTS regions(
             id SERIAL UNIQUE NOT NULL PRIMARY KEY, 
             city_name  VARCHAR(50) NOT NULL);`;

pool.query(tables)
    .then((res) => {

    })
    .catch((err) => {
        console.log(err);
    });


module.exports = pool;