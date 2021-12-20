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
import ServiceLists from "./Pages/Dashboard/Admin/ServiceLists/serviceLists";
import AddService from "./Pages/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path="/dashboard" element={<Order></Order>}></Route>
            <Route path="/dashboard/serviceList" element={<ServiceList></ServiceList>}></Route>
            <Route path="/dashboard/review" element={<Review></Review>}></Route>
            <Route path="/dashboard/servicelists" element={<ServiceLists></ServiceLists>}></Route>
            <Route path="/dashboard/addService" element={<AddService></AddService>}></Route>
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
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
