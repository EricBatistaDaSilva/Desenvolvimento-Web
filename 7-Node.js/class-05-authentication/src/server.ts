import express from "express";
import "dotenv/config";
import { routes } from "./routes";
import { pageNotFound } from "./errors/pageNotFound";
import { appErrors } from "./errors/appErros";
import { sqliteConnection } from "./databases/sqlite3";
import { runMigrations } from "./databases/sqlite3/migrations";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.use(pageNotFound);
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server in running on PORT ${PORT}`);
});

sqliteConnection()
  .then(() => console.log("Database is connected..."))
  .catch((error) => console.error("Database is not connected - ", error));

runMigrations();
