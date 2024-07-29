"use client";
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

type LoginCredentials = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const router = useRouter();
  const addAuth = useAuthStore((store) => store.addAuth);

  const { isLoading, mutate, data } = useMutation(
    async () => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/user/login`,
        loginCredentials
      );
      return res.data;
    },
    {
      onSuccess: (res: {
        data: { token: string; _id: string };
        message: string;
      }) => {
        console.log(res);
        addAuth(res.data.token, res.data._id);
        toast.success(res.message);
        router.push("/dashboard");
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    }
  );

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className="border rounded-2xl space-y-4 bg-form-gradient w-[35%] p-10 border-[#CECECE]">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">
          Welcome to <span className="text-[#4534AC]">Workflo!</span>
        </h1>
      </div>
      <form className="space-y-3 mt-4" onSubmit={formHandler}>
        <input
          className="w-full bg-[#EBEBEB] outline-[#999999] p-2  h-10 rounded-lg"
          type="text"
          name="email"
          id="email"
          placeholder="Your email"
          onChange={inputHandler}
          value={loginCredentials.email}
          ref={inputRef}
          required
        />
        <div className="relative">
          <input
            className="w-full bg-[#EBEBEB] outline-[#999999]  p-2 h-10 border rounded-lg"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            value={loginCredentials.password}
            onChange={inputHandler}
            required
          />
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 hover:cursor-pointer top-0 bottom-0 flex items-center"
          >
            <Image
              src="/eye-icon.png"
              width={20}
              height={20}
              alt="show password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-10 border rounded-lg bg-form-button text-white"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center items-center">
        <p className="text-sm font-normal text-[#606060]">
          Don&apos;t have an account? Create a{" "}
          <Link className="text-[#0054A1]" href="signup">
            new account.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
