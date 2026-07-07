import "./AddNotes.css";
import { useState } from "react";

export const AddNotes = ({ notes, setNotes}) => {

    const [note, setNote] = useState("");

    const handleInput = () => {

        if (note.trim() === "") return;

        const newNote = {
            id: Date.now(),
            information: note.trim(),
        };

        setNotes([...notes, newNote]);

        setNote("");
    };

    Date.UTC()


    return (
        <div className="noteBox">

            <input
                type="text"
                className="inputBox"
                placeholder="Write a short note"
                maxLength="100"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                autoComplete="off"
            />

            <button 
                type="button" 
                onClick={handleInput}
            >
                Add
            </button>

        </div>
    );
};