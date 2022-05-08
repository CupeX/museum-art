import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ArtEditPage from "./layout/ArtEditPage";
import ArtPreviewPage from "./layout/ArtPreviewPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ArtPreviewPage />} />
          <Route path="/artedit" element={<ArtEditPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
