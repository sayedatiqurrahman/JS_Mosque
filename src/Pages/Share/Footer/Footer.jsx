import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";
import icon from "../../../assets/icon/icon.png";
import { CiLocationArrow1, CiPhone } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Newsletter from "../../Home/Newsletter/Newsletter";

const Footer = () => {
  return (
    <div className=" ">
      <Newsletter />

      <div className="bgThard lg:px-10">
        <footer className="footer p-10  textSecondary">
          <aside>
            <div className="flexContainer">
              <img
                className="h-12"
                src={icon}
                alt=""
                style={{ filter: "brightness(0) invert(1)" }}
              />

              <h1 className="text-lg font-semibold mt-2">IWF London</h1>
            </div>

            <p className="text-xs">
              Since 1987, Our institution guiding students and <br /> people
              around the world. Helping others in region <br /> with astonishing
              facilities.
            </p>
          </aside>
          <nav className="text-xs">
            <header className="">
              <h1 className="text-[15px] font-semibold mb-1">Quick Link</h1>
              <p className="w-24 h-1 rounded-md  bg-gradient-to-r from-[#33de0c] to-[#38AB1E]/20"></p>
            </header>
            <a className="link link-hover ">About Us</a>
            <a className="link link-hover">Our Products</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">How we do it</a>
          </nav>

          <nav className="text-xs">
            <header className="">
              <h1 className="text-[15px] font-semibold mb-1">Useful Links</h1>
              <p className="w-24 h-1 rounded-md  bg-gradient-to-r from-[#33de0c] to-[#38AB1E]/20"></p>
            </header>
            <a className="link link-hover ">Contact Us</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookies Policy</a>
          </nav>

          {/* Todo Change number and info */}
          <nav className="text-xs">
            <header className="">
              <h1 className="text-[15px] font-semibold mb-1">Contact Us</h1>
              <p className="w-24 h-1 rounded-md  bg-gradient-to-r from-[#33de0c] to-[#38AB1E]/20"></p>
            </header>

            <p className="flexContainer gap-1 mt-2">
              <span>
                <CiLocationArrow1 className="h-5 w-5" />
              </span>
              <span>London, United Kingdom</span>
            </p>
            <p className="flexContainer gap-1 ">
              <span>
                <CiPhone className="h-5 w-5" />
              </span>
              <span>+44 12345678901</span>
            </p>

            <p className="flexContainer gap-1 ">
              <span>
                <MdOutlineMarkEmailUnread className="h-5 w-5 text-white/70" />
              </span>
              <span>info@gmail.com</span>
            </p>
          </nav>
        </footer>

        <hr className="lg:mx-10" />

        {/* Copyright */}
        <section className="flexContainer mt-3 justify-between textSecondary px-6 pb-6 lg:px-10">
          <p className="text-[10px] lg:text-xs">
            Copyright 2023. All Rights Reserved.
          </p>

          {/* Todo Change social info */}
          <div className="social flexContainer gap-2">
            <div className="div">
              <div className="div textThardary bgSecondary rounded-full cursor-pointer ">
                <SlSocialYoutube className="text-xl mx-auto h-7 w-7 p-2 " />
              </div>
            </div>
            <div className="div textThardary bgSecondary rounded-full cursor-pointer ">
              <FaFacebookF className="text-xl mx-auto  h-7 w-7 p-2 " />
            </div>

            <div className="div">
              <div className="div textThardary bgSecondary rounded-full cursor-pointer ">
                <IoLogoWhatsapp className="text-xl mx-auto  h-7 w-7 p-2 " />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
