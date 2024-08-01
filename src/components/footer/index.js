import React from "react";
import Image from "next/image";
import FacebookIcon from "../icons/facebook-icon";
import InstagramIcon from "../icons/instagram-icon";
import TwitterIcon from "../icons/twitter-icon";
import GooglePlayImg from "../../../public/assets/images/google-play.png";
import PlayStoreImg from "../../../public/assets/images/play-store.png";

const FooterSection = ({ title, links }) => (
  <div className="space-y-4 xl:space-y-10">
    <h5 className="font-bold text-lg xl:text-[28px] text-branded-blue">
      {title}
    </h5>
    <ul className="space-y-2 xl:space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-white xl:text-xl">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialMediaLink = ({ href, label, icon, className }) => (
  <a
    href={href}
    aria-label={label}
    className={`${className} h-10 w-10 xl:h-14 xl:w-14 rounded-full bg-white flex items-center justify-center`}
  >
    {icon}
  </a>
);

const companyLinks = [
  { href: "#", label: "About" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Mobile" },
];

const contactLinks = [
  { href: "#", label: "Help/FAQ" },
  { href: "#", label: "Press" },
  { href: "#", label: "Affiliates" },
];

const moreLinks = [
  { href: "#", label: "Terms" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Refund Policy" },
];

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

          <nav
            aria-label="Footer Navigation"
            className="flex flex-col md:flex-row text-center lg:text-left space-y-8 md:space-y-0 md:space-x-24 lg:space-x-8 xl:space-x-24"
          >
            <FooterSection title="Company" links={companyLinks} />
            <FooterSection title="Contact" links={contactLinks} />
            <FooterSection title="More" links={moreLinks} />
          </nav>

          <section className="mt-6 lg:mt-0 flex flex-col space-y-10">
            <div className="flex space-x-8 justify-center lg:justify-normal">
              <SocialMediaLink
                href="#"
                label="Facebook"
                icon={<FacebookIcon />}
              />
              <SocialMediaLink
                href="#"
                label="Instagram"
                className="instagram-gradient"
                icon={<InstagramIcon />}
              />
              <SocialMediaLink
                href="#"
                label="Twitter"
                icon={<TwitterIcon />}
              />
            </div>

            <section className="flex flex-col space-y-6">
              <p className="text-xl lg:text-2xl xl:text-3xl font-medium text-center lg:text-left">
                Download our app
              </p>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Image
                  src={GooglePlayImg}
                  alt="Google Play"
                  width={142}
                  height={46}
                />
                <Image
                  src={PlayStoreImg}
                  alt="Play Store"
                  width={142}
                  height={46}
                />
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
