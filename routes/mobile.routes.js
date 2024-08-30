import express from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  run,
  update,
} from "../controller/controllers.js";

const router = express.Router();

router.get("/test", run);

router.post("/create", create);

router.get("/read", getAll);

router.get("/read/:id", getById);

router.put("/update/:id", update);

router.delete("/delete/:id", deleteById);

export default router;
