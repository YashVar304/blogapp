import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import Logo from "../Components/Logo";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentAccount();
        dispatch(authLogin({ userData }));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="w-full flex items-center justify-center  ">
      <div
        className={`mx-auto w-full max-w-lg rounded-xl border-2 border-purple-500 shadow-lg my-20`}
      >
        <div className="flex items-center justify-center mt-5">
          <span>
            <Logo />
          </span>
        </div>
        <h1 className="text-2xl font-semibold text-center mt-2">
          Signin to your account
        </h1>
        <p className="text-center mt-2">
          don't have an account? <a className="text-purple-500">Signup</a>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form action="" className="mt-8" onSubmit={handleSubmit(login)}>
          <div className="flex flex-col items-center">
            <Input
              label="Email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Email address is not valid",
                },
              })}
            />
            <Input
              label="Password"
              placeholder="Enter your email"
              {...register("password", {
                required: true,
              })}
              type="password"
            />

            <Button
              type="submit"
              className=" bg-purple-500 text-white py-2.5 my-10 rounded-full"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
