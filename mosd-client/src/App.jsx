import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx";
import AboutUs from "./Screens/About/AboutPage.jsx";
import ContactUs from "./Screens/Contact/ContactPage.jsx";
import NotFound from "./Screens/NotFound/NotFound.jsx";
import LoginPage from "./Screens/Login/LoginPage.jsx";
import RegisterPage from "./Screens/Register/RegisterPage.jsx";
import PasswordPage from "./Screens/Dashboard/Password/Password.jsx";
import ForgotPage from "./Screens/Dashboard/Password/Forgot.jsx";
import MovieDetailPage from "./Screens/MovieDetail/MovieDetailPage.jsx";
import AddMovie from "./Screens/Dashboard/Admin/AddMovies/AddMovies.jsx";
import Categories from "./Screens/Dashboard/Admin/Categories/Categories.jsx";
import MoviesList from "./Screens/Dashboard/Admin/MovieList/MovieList.jsx";
import Profile from "./Screens/Dashboard/Profile/Profile.jsx";
import FavoriteMovies from "./Screens/Dashboard/FavoriteMovies/FavoriteMovies.jsx";
import Dashboard from "./Screens/Dashboard/Admin/DashBoard/DashBoard.jsx";
import Users from "./Screens/Dashboard/Admin/Users/Users.jsx";
import MovieListPage from "./Screens/MovieList/MovieListPage.jsx";
import WatchMoviePage from "./Screens/WatchMovie/WatchMoviePage.jsx";
import MovieSearchPage from "./Screens/MovieSearch/MovieSearchPage.jsx";
import MovieFilterPage from "./Screens/MovieFilter/MovieFilterPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/change-password" element={<PasswordPage />} />
      <Route path="/forgot-password" element={<ForgotPage />} />
      <Route path="/movies/search/:name" element={<MovieSearchPage />} />
      <Route path="/movies/filter/:filter" element={<MovieFilterPage />} />
      <Route path="/movies" element={<MovieListPage />} />
      <Route path="/movie/:name" element={<MovieDetailPage />} />
      <Route path="/movie/watch/:name" element={<WatchMoviePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addmovie" element={<AddMovie />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/movies-list" element={<MoviesList />} />
      <Route path="/favorite-movies" element={<FavoriteMovies />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<Users />} />
      <Route path="/change-password" element={<PasswordPage />} />
      <Route path="/reset-password/:userId" element={<PasswordPage />} />
      {/* <Route path="/dashboard/admin/users" element={<Users />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
