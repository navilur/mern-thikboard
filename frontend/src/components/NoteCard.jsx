import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handelDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Faild to delete the note");
    }
  };

  return (
    <Link to={`/note/${note._id}`}>
      <div className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#38bdf8]">
        <div className="card-body">
          <h3 className="card-title text-base-content">{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-base-content/60 text-sm">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
              <PenSquareIcon className="size-4" />
              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={(e) => {
                  handelDelete(e, note._id);
                }}
              >
                <Trash2Icon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
