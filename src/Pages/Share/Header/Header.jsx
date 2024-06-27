import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CiFacebook } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineNoteAlt } from "react-icons/md";
import icon from "../../../assets/icon/icon.png";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <section className="py-1 lg:px-12 border-b border-blue-950/75 shadow-lg ">
      <div className="navbar text-white  mx-auto shadow-none">
        <div className="navbar-start pl-2 ">
          <img className="h-12" src={icon} alt="" />
        </div>

        <div className="navbar-end">
          <ul className="hidden lg:inline-flex gap-4 mr-6 text-sm">
            <li>
              <Link
                className="link-hover textPrimary hover:border-b"
                smooth
                to="#home"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="link-hover textPrimary hover:text-[#D70007]"
                smooth
                to="#service"
              >
                Event
              </Link>
            </li>

            <li>
              <Link
                className="link-hover textPrimary hover:text-[#D70007]"
                smooth
                to="#about"
              >
                Donate
              </Link>
            </li>

            <li>
              <Link
                className="link-hover textPrimary hover:text-[#D70007]"
                smooth
                to="#about"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="link-hover textPrimary hover:text-[#D70007]"
                smooth
                to="#about"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Drowser Container */}
          <section className="lg:hidden">
            <input
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle"
              checked={isDrawerOpen}
              onChange={() => setDrawerOpen(!isDrawerOpen)}
            />
            <div className="drawer-content ">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button cursor-pointer bgPrimary py-[9px] px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side z-50 ">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu textPrimary uppercase p-4 w-80 min-h-full bgSecondary border-r ">
                {/* Sidebar content here */}
                <li className="borderPrimary hoverbtneffect ">
                  <p className="font-semibold text-xl">Iwflondon</p>
                </li>
                <li
                  onClick={closeDrawer}
                  className="mt-3 border-b hoverbtneffect"
                >
                  <Link smooth to="#home">
                    HOME
                  </Link>
                </li>

                <li
                  onClick={closeDrawer}
                  className="mt-3 border-b hoverbtneffect"
                >
                  <Link smooth to="#service">
                    Event
                  </Link>
                </li>

                <li
                  onClick={closeDrawer}
                  className="mt-3 border-b hoverbtneffect"
                >
                  <Link smooth to="#about">
                    Donate
                  </Link>
                </li>

                <li
                  onClick={closeDrawer}
                  className="mt-3 border-b textPrimary hoverbtneffect"
                >
                  <Link smooth to="#contact">
                    About
                  </Link>
                </li>

                <li
                  onClick={closeDrawer}
                  className="mt-3 border-b textPrimary hoverbtneffect"
                >
                  <Link smooth to="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Header;
