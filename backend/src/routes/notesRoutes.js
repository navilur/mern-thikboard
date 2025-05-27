import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/notesController.js";

const route = express.Router();

// get
route.get("/", getAllNotes);

// post
route.post("/", createNote);

// update
route.put("/:id", updateNote);

// delete
route.delete("/:id", deleteNote);

export default route;
