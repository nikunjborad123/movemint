import Image from "next/image";
import React from "react";
import Logo from "../../../../public/assets/images/logo.png";
import Input from "../../input";
import GooglePlayImg from "../../../../public/assets/images/google-play.png";
import PlayStoreImg from "../../../../public/assets/images/play-store.png";

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
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_63_12)">
                <rect
                  width="24"
                  height="24"
                  transform="translate(0 0.897949)"
                  fill="black"
                />
                <path
                  d="M21.2806 19.3219C20.9328 20.1255 20.5211 20.8651 20.0441 21.5452C19.3939 22.4723 18.8615 23.114 18.4512 23.4703C17.8151 24.0552 17.1337 24.3548 16.4039 24.3718C15.8801 24.3718 15.2483 24.2228 14.5129 23.9204C13.7751 23.6194 13.097 23.4703 12.477 23.4703C11.8268 23.4703 11.1294 23.6194 10.3835 23.9204C9.63647 24.2228 9.03466 24.3803 8.57453 24.396C7.87475 24.4258 7.17725 24.1177 6.48102 23.4703C6.03665 23.0827 5.48084 22.4183 4.81499 21.477C4.1006 20.4719 3.51326 19.3063 3.05313 17.9775C2.56035 16.5421 2.31332 15.1522 2.31332 13.8066C2.31332 12.2653 2.64639 10.9358 3.31351 9.8218C3.83781 8.92695 4.53531 8.22107 5.40829 7.70288C6.28127 7.18469 7.22453 6.92062 8.24033 6.90373C8.79614 6.90373 9.52502 7.07565 10.4308 7.41354C11.334 7.75257 11.914 7.9245 12.1682 7.9245C12.3583 7.9245 13.0026 7.72346 14.0948 7.32268C15.1276 6.951 15.9993 6.79711 16.7134 6.85773C18.6485 7.0139 20.1023 7.7767 21.0691 9.15098C19.3385 10.1996 18.4824 11.6683 18.4994 13.5524C18.5151 15.0199 19.0474 16.2411 20.0938 17.2108C20.568 17.6609 21.0975 18.0087 21.6867 18.2557C21.5589 18.6263 21.424 18.9812 21.2806 19.3219ZM16.8426 1.85808C16.8426 3.00834 16.4224 4.08234 15.5848 5.07642C14.5739 6.25818 13.3513 6.94106 12.0254 6.83331C12.0085 6.69531 11.9987 6.55008 11.9987 6.39746C11.9987 5.29321 12.4794 4.11144 13.3331 3.14519C13.7593 2.65596 14.3014 2.24917 14.9587 1.92466C15.6146 1.605 16.235 1.42822 16.8185 1.39795C16.8355 1.55172 16.8426 1.7055 16.8426 1.85806V1.85808Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_63_12">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.897949)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-base font-medium">Continue with Apple</span>
          </button>
          <button className="w-full py-2 flex items-center justify-center space-x-2 bg-white rounded-lg">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                transform="translate(0 0.897949)"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.04 13.1594C23.04 12.3439 22.9668 11.5599 22.8309 10.8071H12V15.2555H18.1891C17.9225 16.693 17.1123 17.911 15.8943 18.7264V21.6119H19.6109C21.7855 19.6099 23.04 16.6617 23.04 13.1594Z"
                fill="#4285F4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9999 24.3978C15.1049 24.3978 17.7081 23.368 19.6108 21.6116L15.8942 18.7262C14.8645 19.4162 13.5472 19.8239 11.9999 19.8239C9.00469 19.8239 6.46946 17.8009 5.56514 15.0828H1.7231V18.0623C3.61537 21.8207 7.50446 24.3978 11.9999 24.3978Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.56523 15.0829C5.33523 14.3929 5.20455 13.6559 5.20455 12.8979C5.20455 12.14 5.33523 11.4029 5.56523 10.7129V7.7334H1.72318C0.944318 9.2859 0.5 11.0423 0.5 12.8979C0.5 14.7536 0.944318 16.51 1.72318 18.0625L5.56523 15.0829Z"
                fill="#FBBC05"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9999 5.97181C13.6883 5.97181 15.2042 6.55204 16.3961 7.69159L19.6945 4.39318C17.7029 2.53749 15.0997 1.39795 11.9999 1.39795C7.50446 1.39795 3.61537 3.97499 1.7231 7.7334L5.56514 10.7129C6.46946 7.99477 9.00469 5.97181 11.9999 5.97181Z"
                fill="#EA4335"
              />
            </svg>

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
