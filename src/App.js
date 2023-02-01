import Home from "./pages/home/Home"
import User from "./pages/user/User"
import Login from "../src/components/login/Login"
import EditProfile from "./pages/editProfile/EditProfile"
import CreatePost from "./pages/createPost/CreatePost"
import AddServices from "./pages/addServices/AddServices"
import RequestOtp from "../src/components/requestOtp/RequestOtp"
import EnterOtp from "../src/components/enterOtp/EnterOtp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellerProfile from "./pages/sellerProfile/SellerProfile"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="user" element={<User />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="createPost" element={<CreatePost />} />
            <Route path="addServices" element={<AddServices />} />
            <Route path="sellerprofile" element={<SellerProfile />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
