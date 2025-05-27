import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";

const route = express.Router();

// get
route.get("/", getAllNotes);

// get single
route.get("/:id", getNoteById);

// post
route.post("/", createNote);

// update
route.put("/:id", updateNote);

// delete
route.delete("/:id", deleteNote);

export default route;
