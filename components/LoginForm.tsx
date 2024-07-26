import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="border rounded-2xl space-y-4 bg-form-gradient w-[35%] p-10 border-[#CECECE]">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">
          Welcome to <span className="text-[#4534AC]">Workflo!</span>
        </h1>
      </div>
      <form className="space-y-3 mt-4">
        <input
          className="w-full bg-[#EBEBEB] outline-[#999999] p-2  h-10 rounded-lg"
          type="text"
          placeholder="Your email"
        />
        <div className="relative">
          <input
            className="w-full bg-[#EBEBEB] outline-[#999999]  p-2 h-10 border rounded-lg"
            type="text"
            placeholder="Password"
          />
          <div className="absolute right-2 hover:cursor-pointer top-0 bottom-0 flex items-center">
            <Image
              src="/eye-icon.png"
              width={20}
              height={20}
              alt="show password"
            />
          </div>
        </div>

        <button className="w-full h-10 border rounded-lg bg-form-button text-white">
          Login
        </button>
      </form>
      <div className="flex justify-center items-center">
        <p className="text-sm font-normal text-[#606060]">
          Don’t have an account? Create a{" "}
          <Link className="text-[#0054A1]" href="/">
            new account.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
