import { useForm } from "react-hook-form";
import Layout from "../../Layout/Layout.jsx";
import { registerUser, resetCodes } from "../../features/auth/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerCode = useSelector((state) => state.auth.registerCode);
  console.log("registerCode: ", registerCode);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    const handleRegisterSuccess = () => {
      toast.success("User register successfully", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    };

    if (registerCode === 1) {
      handleRegisterSuccess();
    } else if (registerCode === 2)
      toast.error("Username already exists", { autoClose: 2000 });
    else if (registerCode === 3)
      toast.error("Invalid email address", { autoClose: 2000 });
    else if (registerCode === 4)
      toast.error("Username already exists", { autoClose: 2000 });
    else if (registerCode === 5)
      toast.error("Email already exists", { autoClose: 2000 });
    dispatch(resetCodes());
  }, [dispatch, registerCode, navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-2 mb-28 mt-6">
        <div className="bg-dry px-10 pt-2 pb-10 mx-auto border rounded-md md:w-1/2">
          <div className="mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 mt-5">
                <label
                  htmlFor="Name"
                  className="block text-gray-600 text-sm font-bold"
                >
                  Username:
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="off"
                  className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors?.username && (
                  <p className="text-red-400 text-xs mt-1">
                    Please enter username.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm font-bold"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                  {...register("email", { required: "Email is required" })}
                />
                {errors?.email && (
                  <p className="text-red-400 text-xs mt-1">
                    Please enter email address.
                  </p>
                )}
              </div>

              <div className="mb-4 mt-5">
                <label
                  htmlFor="password"
                  className="block text-gray-600 text-sm font-bold"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors?.password && (
                  <p className="text-red-400 text-xs mt-1">
                    Please enter password.
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
