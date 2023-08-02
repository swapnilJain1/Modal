import "./styles.css";
import { useState } from "react";
import { Modal } from "./Modal";

export default function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      {isShow && <Modal setIsShow={setIsShow} />}
      <h1>Welcome !!!</h1>
      <button onClick={() => setIsShow(true)}>Show Modal</button>
    </div>
  );
}
