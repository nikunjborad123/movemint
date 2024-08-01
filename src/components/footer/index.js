import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
          <section className="mb-6 lg:mb-0 text-center lg:text-left">
            <p className="text-base xl:text-lg">
              Making the world a smaller place. <br /> One move at a time.
            </p>
          </section>

          <nav aria-label="Footer Navigation" className="flex flex-col md:flex-row text-center lg:text-left space-y-8 md:space-y-0 md:space-x-24 lg:space-x-8 xl:space-x-24">
             <div className="space-y-4 xl:space-y-10">
              <h5 className="font-bold text-lg xl:text-[28px] text-branded-blue">Company</h5>
              <ul className="space-y-2 xl:space-y-4">
                <li><a href="#" className="text-white xl:text-xl">About</a></li>
                <li><a href="#" className="text-white xl:text-xl">Careers</a></li>
                <li><a href="#" className="text-white xl:text-xl">Mobile</a></li>
              </ul>
            </div>

             <div className="space-y-4 xl:space-y-10">
              <h5 className="font-bold text-lg xl:text-[28px] text-branded-blue">Contact</h5>
              <ul className="space-y-2 xl:space-y-4">
                <li><a href="#" className="text-white xl:text-xl">Help/FAQ</a></li>
                <li><a href="#" className="text-white xl:text-xl">Press</a></li>
                <li><a href="#" className="text-white xl:text-xl">Affiliates</a></li>
              </ul>
            </div>

             <div className="space-y-4 xl:space-y-10">
              <h5 className="font-bold text-lg xl:text-[28px] text-branded-blue">More</h5>
              <ul className="space-y-2 xl:space-y-4">
                <li><a href="#" className="text-white xl:text-xl">Terms</a></li>
                <li><a href="#" className="text-white xl:text-xl">Privacy Policy</a></li>
                <li><a href="#" className="text-white xl:text-xl">Refund Policy</a></li>
              </ul>
            </div>
          </nav>

          <section className="mt-6 lg:mt-0 flex flex-col space-y-10">
            <div className="flex space-x-8 justify-center lg:justify-normal">
              <a href="#" aria-label="Facebook" className="h-10 w-10 xl:h-14 xl:w-14 rounded-full bg-white flex items-center justify-center">
                <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.08298 3.33819C7.65726 3.20351 7.16768 3.11372 6.72067 3.11372C6.16723 3.11372 4.97521 3.49531 4.97521 4.23605V6.00934H7.80626V8.99474H4.97521V17.2327H2.12287V8.99474H0.717987V6.00934H2.12287V4.50541C2.12287 2.2383 3.10203 0.352783 5.46479 0.352783C6.27366 0.352783 7.72111 0.397676 8.5087 0.689483L8.08298 3.33819Z" fill="#080809"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="instagram-gradient h-10 w-10 xl:h-14 xl:w-14 rounded-full flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2505 0.689087H3.2035C1.48474 0.689087 0.0860291 2.08779 0.0860291 3.80656V18.8536C0.0860291 20.5727 1.48474 21.971 3.2035 21.971H18.2505C19.9697 21.971 21.368 20.5727 21.368 18.8536V3.80656C21.368 2.08779 19.9697 0.689087 18.2505 0.689087ZM20.121 18.8536C20.121 19.8848 19.2818 20.724 18.2505 20.724H3.2035C2.17224 20.724 1.33302 19.8848 1.33302 18.8536V3.80656C1.33302 2.7753 2.17224 1.93608 3.2035 1.93608H18.2505C19.2818 1.93608 20.121 2.7753 20.121 3.80656V18.8536Z" fill="#191A1F"/>
                  <path d="M17.5851 3.22534C16.8976 3.22534 16.3381 3.78482 16.3381 4.47233C16.3381 5.15984 16.8976 5.71932 17.5851 5.71932C18.2726 5.71932 18.8321 5.15984 18.8321 4.47233C18.8321 3.78482 18.2726 3.22534 17.5851 3.22534Z" fill="#191A1F"/>
                  <path d="M10.7268 5.72021C7.63258 5.72021 5.11533 8.23747 5.11533 11.3317C5.11533 14.4259 7.63258 16.9431 10.7268 16.9431C13.821 16.9431 16.3382 14.4259 16.3382 11.3317C16.3382 8.23747 13.821 5.72021 10.7268 5.72021ZM10.7268 15.6961C8.32009 15.6961 6.36232 13.7384 6.36232 11.3317C6.36232 8.92498 8.32009 6.9672 10.7268 6.9672C13.1335 6.9672 15.0912 8.92498 15.0912 11.3317C15.0912 13.7384 13.1335 15.6961 10.7268 15.6961Z" fill="#191A1F"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="h-10 w-10 xl:h-14 xl:w-14 rounded-full bg-white flex items-center justify-center">
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3333 1.63523C20.54 1.91247 19.6947 2.09623 18.8133 2.18546C19.72 1.7542 20.412 1.07651 20.7373 0.259668C19.892 0.661184 18.9587 0.944795 17.964 1.10306C17.1613 0.422187 16.0173 0.000488281 14.7693 0.000488281C12.348 0.000488281 10.3987 1.56619 10.3987 3.48561C10.3987 3.76178 10.428 4.02733 10.5 4.28014C6.864 4.13887 3.64667 2.75056 1.48533 0.635691C1.108 1.15724 0.886667 1.7542 0.886667 2.39684C0.886667 3.60351 1.66667 4.67316 2.82933 5.29243C2.12667 5.28181 1.43733 5.11929 0.853333 4.86329C0.853333 4.87392 0.853333 4.88772 0.853333 4.90153C0.853333 6.5947 2.36933 8.00107 4.35733 8.32504C4.00133 8.40258 3.61333 8.43976 3.21067 8.43976C2.93067 8.43976 2.648 8.42702 2.38267 8.38028C2.94933 9.76009 4.55733 10.7745 6.46933 10.8074C4.98133 11.7347 3.092 12.2935 1.04667 12.2935C0.688 12.2935 0.344 12.2807 0 12.2457C1.93733 13.241 4.23333 13.8092 6.70933 13.8092C14.7573 13.8092 19.1573 8.49818 19.1573 3.89456C19.1573 3.74054 19.1507 3.59183 19.1413 3.44418C20.0093 2.95344 20.7387 2.34054 21.3333 1.63523Z" fill="#080809"/>
                </svg>
              </a>
            </div>

            <section className="flex flex-col space-y-6">
              <p className="text-xl lg:text-2xl xl:text-3xl font-medium text-center lg:text-left">
                Download our app
              </p>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Image src="/assets/images/google-play.png" alt="Google Play" width={142} height={46} />
                <Image src="/assets/images/play-store.png" alt="Play Store" width={142} height={46} />
              </div>
            </section>
          </section>
        </div>
        <div className="mt-24 text-center text-white text-lg">
          &copy; {currentYear} All rights reserved, Movemint App Inc
        </div>
      </div>
    </footer>
  );
};

export default Footer;
