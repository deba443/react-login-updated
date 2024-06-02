import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [show,setShow]=useState(false)
  return (
    <div className="App">
      <Header />
      <main>
        <Login setShow={setShow}/>
        <Register show={show} setShow={setShow} onClose={()=>setShow(false)}/>
      </main>
    </div>
  );
}

export default App;
