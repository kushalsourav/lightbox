import { Route, Routes } from "react-router-dom";
import Explore from "../Explore/Explore";
import Login from "../Form/Login/Login";
import Signup from "../Form/Signup";
import Home from "../Home/Home";
import UI from "../UI/UI";
import WatchLater from "../WatchLater/WatchLater";
import {RequireAuth} from '../Form/Authentication/RequireAuth';
import Feedback from "../Feedback/Feedback";

const Router = () => {

return(
    <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/UI" element={<UI />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Feedback" element={<RequireAuth><Feedback /></RequireAuth>} />
    <Route path="/WatchLater" element={<RequireAuth><WatchLater /></RequireAuth>} />
    <Route path="/Explore" element={<RequireAuth><Explore /></RequireAuth>} />
   </Routes>
    
    </>
)


}

export default Router;