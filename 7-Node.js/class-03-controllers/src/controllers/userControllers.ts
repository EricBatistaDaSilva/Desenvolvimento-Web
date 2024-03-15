import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { id, name, age } = req.body;

    if (id && name && age) {
      res.status(201).json({ status: `user ${id} created!` });
      return;
    }

    res.status(400).json({ status: `user not created!` });
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.json({ user: id });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, age } = req.body;

    if (id && name && age) {
      console.log("updated", { id, name, age });
      res.status(200).json({ status: `user ${id} updated` });
      return;
    }
    res.status(400).json({ status: "user not updated!" });
  },

  delete(req: Request, res: Response) {
    const {id} = req.params;
    res.status(200).json({status: `user ${id} deleted!`})
  }
};
