import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { navigate, backendUrl } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("The two new passwords do not match. Please check again.");
      return;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/user/reset-password",
        {
          email,
          otp,
          password,
        },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Reset Password</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-2 border border-gray-800"
        type="email"
        placeholder="Enter your Email"
        required
      />
      <input
        onChange={(e) => setOtp(e.target.value)}
        value={otp}
        className="w-full px-3 py-2 border border-gray-800"
        type="text"
        placeholder="Enter 6-digit OTP"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full px-3 py-2 border border-gray-800"
        type={showPassword ? "text" : "password"}
        placeholder="New Password"
        required
      />
      <input
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        className="w-full px-3 py-2 border border-gray-800"
        type={showPassword ? "text" : "password"}
        placeholder="Confirm New Password"
        required
      />

      <div className="w-full flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          id="show"
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="show" className="cursor-pointer">
          Show Passwords
        </label>
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer w-full">
        Update Password
      </button>
    </form>
  );
};

export default ResetPassword;
