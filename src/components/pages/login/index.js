import Image from "next/image";
import React from "react";
import Logo from "../../../../public/assets/images/logo.png";
import Input from "../../input";
import GooglePlayImg from "../../../../public/assets/images/google-play.png";
import PlayStoreImg from "../../../../public/assets/images/play-store.png";
import AppleIcon from "@/components/icons/apple-icon";
import GoogleIcon from "@/components/icons/google-icon";

const Login = () => {
  return (
    <div className="py-28">
      <div className="relative z-10 w-full max-w-80 mx-auto p-6 space-y-6 text-center">
        <Image
          src={Logo}
          alt="Movemint Logo"
          width={256}
          height={40}
          className="w-36 lg:w-48 xl:w-72 mx-auto"
        />
        <p className="text-center text-sm text-white font-bold">
          Please sign-in as a service provider
        </p>
        <form className="space-y-4">
          <Input type="email" placeholder="support@international.com" />
          <Input type="password" placeholder="********" />

          <button
            type="submit"
            className="w-full px-7 py-3 bg-gradient-primary text-white rounded-full font-semibold"
          >
            Sign in with email
          </button>
        </form>
        <div className="text-center text-sm text-white">
          Or if you don&apos;t have an account,{" "}
          <a href="#" className="text-white">
            click here to create one
          </a>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-xs text-white">- Or sign in using -</p>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="w-full  px-7 py-3 flex items-center justify-center space-x-2 bg-black text-white rounded-lg">
            <AppleIcon />
            <span className="text-base font-medium">Continue with Apple</span>
          </button>
          <button className="w-full py-2 flex items-center justify-center space-x-2 bg-white rounded-lg">
            <GoogleIcon />
            <span className="text-black/50 font-medium">
              Continue with Google
            </span>
          </button>
        </div>
        <div className="text-center text-sm text-white mt-4">
          <span className="font-bold "> For Consumers:</span> <br /> Please
          download the app to continue:
        </div>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <Image
            src={GooglePlayImg}
            alt="Google Play"
            width={142}
            height={46}
          />
          <Image src={PlayStoreImg} alt="Play Store" width={142} height={46} />
        </div>
      </div>
    </div>
  );
};

export default Login;
