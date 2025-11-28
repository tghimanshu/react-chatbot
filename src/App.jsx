import { useState } from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom/ChatRoom.Component";

/**
 * The main application component.
 * It serves as the root component for the application structure,
 * managing the main layout and rendering the ChatRoom component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChatRoom />
    </div>
  );
}

export default App;
