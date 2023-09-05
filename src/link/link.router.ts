import express, { Router } from "express";
import { getAllLinks } from "./link.service";
const router = Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  const links = await getAllLinks();
  res.send(links);
});

export default router;
