import { Router } from "express";

export const router = Router();

router.route("/").get((_req, res) => {
  res.send({ name: "Eric" });
});

router.get("/pokemon", (_req, res) => {
  res.send([
    { id: 1, name: "Bulbasaur" },
    { id: 150, name: "Mew" },
    { id: 6, name: "Charizard" },
  ]);
});
