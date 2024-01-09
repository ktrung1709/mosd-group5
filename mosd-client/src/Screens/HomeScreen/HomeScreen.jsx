import Layout from "../../Layout/Layout.jsx";
import Banner from "../../Components/Home/Banner.jsx";
import PopularMovies from "../../Components/Home/PopularMovies.jsx";
import TopRated from "../../Components/Home/TopRated.jsx";

function HomeScreen() {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner />
        <PopularMovies />
        <TopRated />
      </div>
    </Layout>
  );
}

export default HomeScreen;
