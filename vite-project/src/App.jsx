import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDo from "./components/ToDo";
import Line from "./components/Line";

function App() {
  const [count, setCount] = useState(0);
  const [list, setlist] = useState([]);

  function newInf(frm) {
    const newl = {
      frm: frm,
    };
    setlist([...list, newl]);
  }

  return (
    <>
      <div className="container-sm">
        <ToDo newInf={newInf} />

        {list.map((lis) => {
          return <Line frm={lis.frm} />;
        })}
      </div>
    </>
  );
}

export default App;
