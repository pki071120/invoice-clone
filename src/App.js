import Join from "./pages/Join";
import Main from "./pages/Main";
import Set from "./pages/Set";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/main" element={<Main />} />
          <Route path="/set" element={<Set />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
