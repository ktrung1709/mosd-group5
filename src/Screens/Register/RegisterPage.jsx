import { useForm } from "react-hook-form";
import Layout from "../../Layout/Layout.jsx";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
      cfPassword: "",
      phoneNumber: "",
      name: "",
    },
  });

  const onSubmit = (data) => {
    alert(data.email);
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 mb-28 mt-6">
        <div className="bg-dry px-10 pt-2 pb-10 mx-auto border rounded-md md:w-1/2">
          <div className="mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Sign up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  htmlFor="Name"
                  className="block text-gray-600 text-sm font-bold"
                >
                  Name:
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  autoComplete="off"
                  className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                  {...register("name", { required: "name is required" })}
                />
                {errors?.name && (
                  <p className="text-red-400 text-xs mt-1">
                    Please enter name.
                  </p>
                )}
              </div>

              <div className="mb-4 mt-5">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-600 text-sm font-bold"
                >
                  Phone Number:
                </label>
                <input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="off"
                  className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                  })}
                />
                {errors?.phoneNumber && (
                  <p className="text-red-400 text-xs mt-1">
                    Please enter phone number.
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
              <div className="mb-4 mt-5">
                <label
                  htmlFor="cdPassword"
                  className="block text-gray-600 text-sm font-bold"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="cfPassword"
                  id="cfPassword"
                  autoComplete="off"
                  className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                  {...register("cfPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      if (watch("password") !== value) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                />
                {errors?.cfPassword && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.cfPassword.message}
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
