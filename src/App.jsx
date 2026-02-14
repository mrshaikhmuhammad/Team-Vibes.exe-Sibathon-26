import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AiAssistant from "./pages/AiAssistant";
import AppointmentForm from "./pages/AppointmentForm";

function App() {
  return (
   <Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/ai-assistant" element={<AiAssistant />} />
  <Route path="/book-appointment" element={<AppointmentForm />} />
</Routes>

  );
}

export default App;
