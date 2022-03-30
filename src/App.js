import "./App.css";
import UploadGrout from "./util/UploadGrout";
import UploadTile from "./util/UploadTile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTiles from "./util/DisplayAllTies";
import Temp from "./Temp";
import AddUser from "./util/AddUser";
import Login from "./util/Login";
import TileDetails from "./util/TileDetails";
import LandingPage from "./Pages/LandingPage";
import AllGrouts from "./util/DisplayAllGrouts";
import GroutDetails from "./util/GroutDetails";
//////////////////////////////////
//  run inside use effect
//     const token = localStorage.getItem("token");
//     const expiryDate = localStorage.getItem("expiryDate");
//     const UserName = localStorage.getItem("UserName");
//     if (!token || !expiryDate) {
//       //setstate to logout call func as well
//     }
//     if (new Date(expiryDate) <= new Date()) {
//       //call logout handler
//       return;
//     }
//     const remainingMilliseconds =
//       new Date(expiryDate).getTime() - new Date().getTime();
//     setState({ isAuth: true, token: token, UserName: UserName });
//     setAutoLogout(remainingMilliseconds);
//
//     setAutoLogout = (milliseconds) => {
//       setTimeout(() => {
//         //context
//         logoutHandler();
//       }, milliseconds);
//     };

//////////////////////////////////
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/all-tiles" element={<AllTiles />} />
          <Route path="/all-grouts" element={<AllGrouts />} />
          <Route path="/tile-detail/:ItemCode" element={<TileDetails />} />
          <Route path="/grout-detail/:ItemCode" element={<GroutDetails />} />
          <Route path="/add-tile" element={<UploadTile />} />
          <Route path="/add-grout" element={<UploadGrout />} />
          <Route path="/temp" element={<Temp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
