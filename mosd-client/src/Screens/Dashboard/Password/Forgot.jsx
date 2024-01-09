import { useForm } from "react-hook-form";
import Layout from "../../../Layout/Layout.jsx";
import { apiForgotPassword } from "../../../utils/api/auth.js";
import { toast } from "react-toastify";
import './style.scss'

const ForgotPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    const respone = await apiForgotPassword(data.email);
    if (respone)
      toast.success("Please check your email", { autoClose: 1500 });
    else
      toast.error("Something went wrong", { autoClose: 2000 });
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 mb-36 mt-32 forgot-password-container">
        <div className="bg-dry px-10 pt-2 pb-10 mx-auto border rounded-md md:w-1/2">
          <div className="mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Forgot Password</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-bold">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors?.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPage;