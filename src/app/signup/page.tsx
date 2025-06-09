"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post("/api/signup", formData);
    console.log(response);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {" "}
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#00B9F1] py-1 px-6 flex justify-center"></div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>{" "}
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B9F1] focus:border-transparent transition"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>{" "}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B9F1] focus:border-transparent transition"
                placeholder="Enter email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>{" "}
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B9F1] focus:border-transparent transition"
                placeholder="Create a password"
                required
              />
            </div>{" "}
            <button
              type="submit"
              className="w-full bg-[#00B9F1] hover:bg-[#00a3d6] text-white py-3 rounded-lg transition duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#008bbc] focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span
              className="text-[#00B9F1] hover:text-[#00a3d6] font-medium cursor-pointer"
              onClick={() => router.push("/signin")}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
