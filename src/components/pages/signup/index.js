import React from "react";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import Image from "next/image"
import CaptchaImg from '../../../../public/assets/images/recaptcha-logo.png';

const SignUp = () => {
  return (
    <div className="py-28">
      <div className="p-8 max-w-5xl w-full shadow-lg rounded-lg">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6">
          Let&apos;s Get Started
        </h1>
        <p className="mb-6 text-white md:text-lg lg:text-2xl">
          Our support team will use these details to contact you.
        </p>
        <form>
          <div className="mb-4">
            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-6">
              Basic Information:
            </h2>

            <Input id="firstName" type="text" label="First Name" />
            <Input id="lastName" type="text" label="Last Name" />
            <Input id="email" type="email" label="Email Address" />
            <Input id="phoneNumber" type="number" label="Phone Number" />
          </div>
          <div className="mb-4">
            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-6">
              Company Details:
            </h2>

            <Input id="officeLocation" type="text" label="Office Location" />
            <Input
              id="additionalLocation"
              type="text"
              label="Additional Office Locations"
            />
            <button
              type="submit"
              className="w-full px-7 py-2.5 bg-gradient-primary text-white rounded-full font-semibold"
            >
              Add Additional Location
            </button>
          </div>
          <div className="mb-4">
            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-6">
              Business Information:
            </h2>

            <Input
              id="businessLicenseNumber"
              type="number"
              label="Business License Number"
            />
            <Input
              id="einNumber"
              type="number"
              label="Tax Identification Number (EIN)"
            />
            <Input id="yearsBusiness" type="number" label="Years in Business" />
            <Input
              id="numberOfEmployees"
              type="number"
              label="Number of Employees"
            />
          </div>

          <div className="mb-4">
            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-6">
              Legal Information:
            </h2>
            <div className="mb-6 py-4 px-5 border border-white rounded-md">
              <h3 className="text-md md:text-lg lg:text-2xl font-semibold mb-6 text-white">
                Terms & Conditions:
              </h3>
              <div className="space-y-4">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, nisi vel consectetur facilisis, nisl nunc
                  tincidunt justo, id tincidunt libero augue non nulla. Praesent
                  vestibulum tincidunt tellus, nec luctus sapien convallis ac.
                  Fusce non felis at quam dignissim gravida. Quisque aliquet
                  justo at magna interdum, vel convallis lacus commodo.
                  Curabitur et metus eget nisl mollis facilisis. Nulla facilisi.
                  Proin nec urna id metus luctus vestibulum a id libero. Morbi
                  nec ex non quam laoreet aliquet. Duis gravida magna in libero
                  cursus, non elementum lacus tempor.
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, nisi vel consectetur facilisis, nisl nunc
                  tincidunt justo, id tincidunt libero augue non nulla. Praesent
                  vestibulum tincidunt tellus, nec luctus sapien convallis ac.
                  Fusce non felis at quam dignissim gravida. Quisque aliquet
                  justo at magna interdum, vel convallis lacus commodo.
                  Curabitur et metus eget nisl mollis facilisis. Nulla facilisi.
                  Proin nec urna id metus luctus vestibulum a id libero. Morbi
                  nec ex non quam laoreet aliquet. Duis gravida magna in libero
                  cursus, non elementum lacus tempor.
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, nisi vel consectetur facilisis, nisl nunc
                  tincidunt justo, id tincidunt libero augue non nulla. Praesent
                  vestibulum tincidunt tellus, nec luctus sapien convallis ac.
                  Fusce non felis at quam dignissim gravida. Quisque aliquet
                  justo at magna interdum, vel convallis lacus commodo.
                  Curabitur et metus eget nisl mollis facilisis. Nulla facilisi.
                  Proin nec urna id metus luctus vestibulum a id libero. Morbi
                  nec ex non quam laoreet aliquet. Duis gravida magna in libero
                  cursus, non elementum lacus tempor.
                </p>
              </div>
            </div>
            <div className="mb-6 py-4 px-5 border border-white rounded-md">
              <h3 className="text-md md:text-lg lg:text-2xl font-semibold mb-6 text-white">
                Privacy Policy:
              </h3>
              <div className="space-y-4">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, nisi vel consectetur facilisis, nisl nunc
                  tincidunt justo, id tincidunt libero augue non nulla. Praesent
                  vestibulum tincidunt tellus, nec luctus sapien convallis ac.
                  Fusce non felis at quam dignissim gravida. Quisque aliquet
                  justo at magna interdum, vel convallis lacus commodo.
                  Curabitur et metus eget nisl mollis facilisis. Nulla facilisi.
                  Proin nec urna id metus luctus vestibulum a id libero. Morbi
                  nec ex non quam laoreet aliquet. Duis gravida magna in libero
                  cursus, non elementum lacus tempor.
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, nisi vel consectetur facilisis, nisl nunc
                  tincidunt justo, id tincidunt libero augue non nulla. Praesent
                  vestibulum tincidunt tellus, nec luctus sapien convallis ac.
                  Fusce non felis at quam dignissim gravida. Quisque aliquet
                  justo at magna interdum, vel convallis lacus commodo.
                  Curabitur et metus eget nisl mollis facilisis. Nulla facilisi.
                  Proin nec urna id metus luctus vestibulum a id libero. Morbi
                  nec ex non quam laoreet aliquet. Duis gravida magna in libero
                  cursus, non elementum lacus tempor.
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, nisi vel consectetur facilisis, nisl nunc
                  tincidunt justo, id tincidunt libero augue non nulla. Praesent
                  vestibulum tincidunt tellus, nec luctus sapien convallis ac.
                  Fusce non felis at quam dignissim gravida. Quisque aliquet
                  justo at magna interdum, vel convallis lacus commodo.
                  Curabitur et metus eget nisl mollis facilisis. Nulla facilisi.
                  Proin nec urna id metus luctus vestibulum a id libero. Morbi
                  nec ex non quam laoreet aliquet. Duis gravida magna in libero
                  cursus, non elementum lacus tempor.
                </p>
              </div>
            </div>

            <div className="lg:flex space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
              <Checkbox
                id="terms"
                label="I agree to the terms and conditions listed above."
              />
              <Checkbox
                id="privacy"
                label="I agree to the privacy policy listed above."
              />
            </div>

            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-6">
              Verification and Security:
            </h2>
            <div className="mb-6 max-w-[430px]">
              <div className="bg-white rounded-md text-center flex justify-between">
                <div className="flex gap-2 p-6 ">
                  <Checkbox
                    id="privacy"
                    label="Click to Verify"
                    className="h-12 w-12"
                    labelClassName="!text-black"
                  />
                </div>
                <div className="p-6 bg-[#09224B]">
                  <Image
                    src={CaptchaImg}
                    alt="recaptcha"
                    height={64}
                    width={64}
                  />
                </div>
              </div>
            </div>

            <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-6">Submission:</h2>
            <button
              type="submit"
              className="text-xl md:text-2xl lg:text-3xl w-full py-4 md:py-5 lg:py-7 bg-gradient-primary hover:bg-sky-blue rounded-lg text-white font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
