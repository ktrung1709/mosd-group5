import Layout from "../../Layout/Layout.jsx";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <div className="w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md">
          <img
            src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            alt="About us"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute lg:top-24 top-16 w-full flex-colo">
            <h1 className="text-2xl lg:text-h1 text-white text-center font-bold">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
