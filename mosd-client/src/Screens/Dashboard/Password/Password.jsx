import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Layout from "../../../Layout/Layout.jsx";
import { apiResetPassword } from "../../../utils/api.js";
import { getItemWithExpiration } from "../../../utils/localStorage.js";
import { toast } from "react-toastify";

const PasswordPage = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });
    const newPassword = watch("newPassword", "");
    const token = getItemWithExpiration("resetPasswordToken");

    const onSubmit = async (data) => {
        const respone = await apiResetPassword(window.location.pathname.split('/')[2], token, data.newPassword);
        console.log("respone: ", respone)
        if (respone) {
            toast.success("Password changed successfully", { autoClose: 1500 });
            setTimeout(() => {
                navigate("/signin");
            }, 1000);
        }
        else
            toast.error("Something went wrong", { autoClose: 2000 });
    };

    return (
        <Layout>
            <div className="container mx-auto px-2 mb-28 mt-6">
                <div className="bg-dry px-10 pt-2 pb-10 mx-auto border rounded-md md:w-1/2">
                    <div className="mx-auto mt-8">
                        <h1 className="text-3xl font-bold mb-4 text-center">{window.location.pathname.includes('reset') ? "Reset Password" : "Change Password"}</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {
                                !window.location.pathname.includes('reset') ?
                                    (
                                        <div className="mb-4">
                                            <label
                                                htmlFor="currentPassword"
                                                className="block text-gray-600 text-sm font-bold"
                                            >
                                                Current Password:
                                            </label>
                                            <input
                                                type="password"
                                                name="currentPassword"
                                                id="currentPassword"
                                                autoComplete="off"
                                                className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                                                {...register("currentPassword", { required: "Current Password is required" })}
                                            />
                                            {errors?.currentPassword && (
                                                <p className="text-red-400 text-xs mt-1">
                                                    Please enter your current password.
                                                </p>
                                            )}
                                        </div>
                                    ) : <></>
                            }

                            <div className="mb-4">
                                <label
                                    htmlFor="newPassword"
                                    className="block text-gray-600 text-sm font-bold"
                                >
                                    New Password:
                                </label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    autoComplete="off"
                                    className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                                    {...register("newPassword", {
                                        required: "New Password is required",
                                    })}
                                />
                                {errors?.newPassword && (
                                    <p className="text-red-400 text-xs mt-1">
                                        Please enter your new password.
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-gray-600 text-sm font-bold"
                                >
                                    Confirm New Password:
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    autoComplete="off"
                                    className="w-full mt-2 px-3 py-2 border rounded-md text-black"
                                    {...register("confirmPassword", {
                                        required: "Confirm New Password is required",
                                        validate: (value) =>
                                            value === newPassword || "Confirm asswords do not match",
                                    })}
                                />
                                {errors?.confirmPassword && (
                                    <p className="text-red-400 text-xs mt-1">
                                        Please confirm your new password.
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className=" mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Change Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PasswordPage;