import { Pool } from "pg";
import keys from "../config/config";

//Make connection to the Database Depending on the environment

if (process.env.NODE_ENV === "production") {
  module.exports = new Pool({
    connectionString: keys.DATABASE_URL,
  });
}

if (process.env.NODE_ENV === "test") {
  module.exports = new Pool({
    connectionString: keys.DATABASE_URL,
  });

} else {
  module.exports = new Pool({
    connectionString: keys.DATABASE_URL,
  });
}
