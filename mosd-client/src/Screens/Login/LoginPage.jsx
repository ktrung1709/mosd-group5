import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  resetCodes,
} from "../../features/auth/authSlice.js";
import { useEffect } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginCode = useSelector((state) => state.auth.loginCode);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("okay");
    dispatch(loginUser(data));
  };

  useEffect(() => {
    const handleLoginSuccess = () => {
      toast.success("User login successfully", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };

    if (loginCode === 1) {
      handleLoginSuccess();
    } else if (loginCode === 2)
      toast.error("Invalid username or password", { autoClose: 2000 });
    dispatch(resetCodes());
  }, [dispatch, loginCode, navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-2 mb-28 mt-6">
        <div className="bg-dry px-10 pt-2 pb-10 mx-auto border rounded-md md:w-1/2">
          <div className="mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Sign in</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-600 text-sm font-bold"
                >
                  Username:
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                  {...register("username", {
                    required: "username is required",
                  })}
                />
                {errors?.username && (
                  <p className="text-red-400 text-xs mt-1">
                    Please enter username.
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
              <div className="flex justify-center flex-col items-center">
                <p className="text-sm pb-3">
                  Don&apos;t have an account yet?{" "}
                  <NavLink to="/register" className="text-blue-500">
                    Register here
                  </NavLink>
                </p>
                <p className="text-sm">
                  Do not remember password?{" "}
                  <NavLink to="/forgot-password" className="text-blue-500">
                    Click here
                  </NavLink>
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
