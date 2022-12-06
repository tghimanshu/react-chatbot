import { useState } from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom/ChatRoom.Component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChatRoom />
    </div>
  );
}

export default App;
