import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import loginImage from "/login.jpg";
import { useNavigate } from "react-router-dom";
import { useUserRegistrationMutation } from "../redux/slices/UserApi";

export default function RegisterPage() {
  const [userRegistration, { isLoading }] = useUserRegistrationMutation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const signupWithGoogle = () => {
    toast("Signup with Google coming soon!");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    const response = await userRegistration(formData);
    if (response.error) {
      toast.error(response.error.data?.message || "Registration failed!", {
        position: "top-center",
      });
    } else {
      toast.success(response.data?.message || "Registration successful!", {
        position: "top-center",
      });
      navigate("/user-verification", { state: { user: formData } });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex w-1/2 bg-gray-50 items-center justify-center">
          <img
            src={loginImage}
            alt="Signup Illustration"
            className="w-[80%] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side */}
        <form className="w-full md:w-1/2 flex flex-col p-8" onSubmit={handleRegister}>
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Create an Account
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-md font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full border border-gray-300 p-3 pr-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-10 right-3 text-gray-600 cursor-pointer"
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember Me + Forgot */}
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                id="remember"
                className="mr-2 cursor-pointer"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label
                htmlFor="remember"
                className="text-gray-600 cursor-pointer text-sm"
              >
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-blue-500 font-medium text-sm hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white p-3 rounded-lg mt-4 font-semibold hover:bg-blue-700 transition duration-300 shadow-md cursor-pointer ${
              isLoading ? "cursor-not-allowed opacity-70" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Create Account"}
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            onClick={signupWithGoogle}
            className="flex items-center cursor-pointer justify-center w-full border border-gray-300 p-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            <div className="p-2 bg-red-500 rounded-full flex items-center justify-center">
              <FaGoogle className="text-white" />
            </div>
            <span className="ml-3 text-gray-700 font-medium">
              Sign up with Google
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
