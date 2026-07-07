
import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { AddNotes } from "./components/AddNotes";
import { ShowNotes } from "./components/ShowNotes";
import { Footer } from "./components/Footer";


function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {

    localStorage.setItem("notes", JSON.stringify(notes))

  }, [notes])


  return (
    <div className="App">
      <Header></Header>
      <AddNotes notes={notes} setNotes={setNotes}></AddNotes>
      <ShowNotes notes={notes} setNotes={setNotes} task={task} setTask={setTask}></ShowNotes>
      <Footer></Footer>
    </div>
  );
}

export default App;
