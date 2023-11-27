import Layout from "../../Layout/Layout.jsx";

const ContactUs = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <div className="w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md">
          <img
            src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            alt="Contact us"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute lg:top-24 top-16 w-full flex-colo">
            <h1 className="text-2xl lg:text-h1 text-white text-center font-bold">
            Contact Us
            </h1>
          </div>
        </div>
        <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
            <div className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
                <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <h5 className="text-xl font-semibold mb-2">Email Us</h5>
                <p className="mb-0 text-sm text-text leading-7">
                    <a href="mailto:ktrung1709@gmail.com" class="text-blue-600">ktrung1709@gmail.com</a>
                    Interactively grow backend ideas for cross-platform models.
                </p>
            </div>
            <div className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
                <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <h5 className="text-xl font-semibold mb-2">Call Us</h5>
                <p className="mb-0 text-sm text-text leading-7">
                    <a href="mailto:+84 344 130 983" class="text-blue-600">+84 344 130 983</a>
                    Distinctively exploit optimal alignments for intuitive bandwidth.
                </p>
            </div>
            <div className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
                <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <h5 className="text-xl font-semibold mb-2">Location</h5>
                <p className="mb-0 text-sm text-text leading-7">
                    1 Dai Co Viet              
                </p>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;