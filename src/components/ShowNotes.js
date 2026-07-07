import "./ShowNotes.css";

export const ShowNotes = ({notes, setNotes, task, setTask}) => {

    const clearAll = () => {
        setNotes([]);
    }

    const handleDeleteObject = (id) => {
        const newNotesList = notes.filter(note => note.id !== id);
        setNotes(newNotesList);

    }
    return (
        <section className="showNote">

            <div className="notesHeader">
                <div className="infoBox">
                    <span>Notes Count</span>
                    <strong>{notes.length}</strong>
                </div>

                <button className="clearBtn" onClick={clearAll}>
                    Clear All
                </button>
            </div>

            <ul className="notesGrid">
                {notes.map((note =>
                <li className="noteCard" key={note.id}>
                        <p>
                            {note.information}
                        </p>

                        <div className="noteActions">
                            <button className="delete" onClick={() => handleDeleteObject(note.id)}>
                                Delete
                            </button>
                        </div>
                    </li>

                ))}
            </ul>

        </section>
    );
};