import "./App.css";
import UploadGrout from "./util/UploadGrout";
import UploadTile from "./util/UploadTile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTiles from "./util/DisplayAllTies";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllTiles />} />
          <Route path="/add-tile" element={<UploadTile />} />
          <Route path="/add-grout" element={<UploadGrout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
