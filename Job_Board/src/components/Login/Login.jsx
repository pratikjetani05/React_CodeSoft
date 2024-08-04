import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import job from "../../assets/Job.png";
import { signInSuccess } from "../../Redux/UserSlice";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);

        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="login max-w-2xl mx-auto p-4 mt-10 bg-gray-200 rounded-lg shadow-md flex"
      id="login"
    >
      <div className="w-1/2 p-4 flex items-center justify-center">
        <img
          src={job}
          alt="Job"
          className="max-w-full max-h-full rounded-lg transform scale-x-[-1]"
        />
      </div>
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Login
        </h1>
        <form action="post" className="p-5 justify-between">
          <div className="mb-5">
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className="mb-5">
            <button
              type="submit"
              onClick={submit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
