import pool from "./index";

pool.on("connect", () => {

  });

        const removeTables = 
        "DROP TABLE IF EXISTS regions CASCADE;";

         pool.query(removeTables)
         .then((res) => {

         })
         .catch((err) => {
             console.log(err);
         });


export default pool;