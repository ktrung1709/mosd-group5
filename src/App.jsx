import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx";
import AboutUs from "./Screens/About/AboutPage.jsx";
import ContactUs from "./Screens/Contact/ContactPage.jsx";
import NotFound from "./Screens/NotFound/NotFound.jsx";
import LoginPage from "./Screens/Login/LoginPage.jsx";
import RegisterPage from "./Screens/Register/RegisterPage.jsx";
import MovieDetailPage from "./Screens/MovieDetail/MovieDetailPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/movie/:name" element={<MovieDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
