import {Header} from "./components/Header";

import './App.css';
import { AddNotes } from "./components/AddNotes";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddNotes></AddNotes>
    </div>
  );
}

export default App;
