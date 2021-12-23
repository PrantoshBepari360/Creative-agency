import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import OurPortfolio from "./Pages/OurPortfolio/OurPortfolio";
import OurTeam from "./Pages/OurTeam/OurTeam";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PageNotFound from "./Pages/Shared/PageNotFound/PageNotFound";
import Order from "./Pages/Dashboard/Client/Order/Order";
import ServiceList from "./Pages/Dashboard/Client/ServiceList/ServiceList";
import Review from "./Pages/Dashboard/Client/Review/Review";
import AddService from "./Pages/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Lists from "./Pages/Dashboard/Admin/Lists/Lists";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<OurPortfolio />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard" element={<PrivetRoute><Dashboard /></PrivetRoute>}>
            <Route exact path="/dashboard" element={<Order></Order>}></Route>
            <Route path="/dashboard/serviceList" element={<ServiceList></ServiceList>}></Route>
            <Route path="/dashboard/review" element={<Review></Review>}></Route>
            <Route path="/dashboard/lists" element={<AdminRoute><Lists/></AdminRoute>}></Route>
            <Route path="/dashboard/addService" element={<AdminRoute><AddService/></AdminRoute>}></Route>
            <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin/></AdminRoute>}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
