import "./AddNotes.css"

export const AddNotes = () => {
    return (
        <div className="noteBox">
            <input type="text" className="inputBox" placeholder="Write a short note" maxLength="100" name="note" autoComplete="off" />
            <button type="submit">Add</button>
        </div>

    );
}