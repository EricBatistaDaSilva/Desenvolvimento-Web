import express from "express";
import "dotenv/config";
import { routes } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server in running on PORT ${PORT}`);
});
