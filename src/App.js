import Landingpage from "./Pages/Landingpage";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Signup from "./Pages/Signup";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Landingpage/>}></Route>
        <Route exact path="/contactus" element={<ContactUs />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/pricing" element={<Pricing />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
