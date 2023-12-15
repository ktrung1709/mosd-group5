import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt, FaUsers, FaHeart } from "react-icons/fa";
import { RiMovie2Fill, RiLockPasswordLine } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Layout from "../../../Layout/Layout.jsx";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function SideBar({ children }) {
  const SideLinks = [
    {
      name: "Dashboard",
      link: "/dashboard/admin",
      icon: BsFillGridFill,
    },
    {
      name: "Movies List",
      link: "/dashboard/admin/movies-list",
      icon: FaListAlt,
    },
    {
      name: "Add Movie",
      link: "/dashboard/admin/addmovie",
      icon: RiMovie2Fill,
    },
    {
      name: "Categories",
      link: "/dashboard/admin/categories",
      icon: HiViewGridAdd,
    },
    {
      name: "Users",
      link: "/dashboard/admin/users",
      icon: FaUsers,
    },
    {
      name: "Update Profile",
      link: "/dashboard/profile",
      icon: FiSettings,
    },
    {
      name: "Favorites Movies",
      link: "/dashboard/favorites",
      icon: FaHeart,
    },
    {
      name: "Change Password",
      link: "/dashboard/password",
      icon: RiLockPasswordLine,
    },
  ];
  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
            {
              // SideBar Links
              SideLinks.map((link, index) => (
                <NavLink to={link.link} key={index} className={Hover}>
                  <link.icon /> <p>{link.name}</p>
                </NavLink>
              ))
            }
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 rounded-md bg-dry border border-gray-800 p-6"
          >
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SideBar;