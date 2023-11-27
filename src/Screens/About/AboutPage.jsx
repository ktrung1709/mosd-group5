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
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to Our Netflix Vietnam
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">Lorem Ipsum is simply dummy text of the printing and</p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">Completely free, without registration! Lorem Ipsum is simply</p>
                </div>
              </div>
            </div>
            <img src="https://media.baodansinh.vn/baodansinh//2021/3/15/1-1615803960538176456595.png" alt="aboutus" class="w-full xl:block hidden h-header rounded-lg object-cover"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
