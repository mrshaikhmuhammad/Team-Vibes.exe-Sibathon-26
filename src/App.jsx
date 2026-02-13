import { Routes, Route } from "react-router-dom";
import AiAssistant from "./pages/AiAssistant";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AiAssistant />} />
    </Routes>
  );
}

export default App;
