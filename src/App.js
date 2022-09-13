import Landingpage from "./Pages/Landingpage";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Page404 from "./Pages/Page404";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Landingpage/>}></Route>
        <Route exact path="/contactus" element={<ContactUs />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/pricing" element={<Pricing />}></Route>
        <Route exact path="/blog" element={<Blogs />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="*" element={<Page404 />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
