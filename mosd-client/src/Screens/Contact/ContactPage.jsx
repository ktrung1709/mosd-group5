import Layout from "../../Layout/Layout.jsx";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
              <AiOutlineMail />
            </span>
            <h5 className="text-xl font-semibold mb-2">Email Us</h5>
            <p className="mb-0 text-sm text-text leading-7">
              <a href="mailto:ktrung1709@gmail.com" className="text-blue-600">
                ktrung1709@gmail.com
              </a>
              <br />
              Interactively grow backend ideas <br /> for cross-platform models.
            </p>
          </div>
          <div className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
            <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
              <FaPhoneVolume />
            </span>
            <h5 className="text-xl font-semibold mb-2">Call Us</h5>
            <p className="mb-0 text-sm text-text leading-7">
              <a href="tel:+84 344 130 983" className="text-blue-600">
                +84 344 130 983
              </a>
              <br />
              Distinctively exploit optimal alignments <br />
              for intuitive bandwidth.
            </p>
          </div>
          <div className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
            <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
              <FaLocationDot />
            </span>
            <h5 className="text-xl font-semibold mb-2">Location</h5>
            <p className="mb-0 text-sm text-text leading-7">
              <a
                href="https://maps.app.goo.gl/8KHLki8x1Q2TUrjv6"
                className="text-blue-600"
              >
                Google Map Link
              </a>
              <br />1 Dai Co Viet
              <br /> Hai Ba Trung, Ha Noi
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
