import React from "react";
import ShortTitle from "../../Share/ShortTitle/ShortTitle";
import quran from "../../../assets/icon/quran.png";
import heart from "../../../assets/icon/heart.png";
import mosque from "../../../assets/icon/mosque.png";
import help from "../../../assets/icon/help.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Donate = () => {
  return (
    <div className="py-8">
      <header>
        <ShortTitle
          shortTitle="PRESENT TO YOU"
          longTitle="What We Do
"
        />
      </header>

      <main className=" mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="border px-4 py-12 shadow-md">
          <header>
            <img className="h-10 w-10 mx-auto" src={quran} alt="" />
          </header>

          <main className="text-center mt-3 ">
            <h1 className="font-semibold ">Quran Learning</h1>
            <p className="text-xs px-3 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem vitae adipisci dolore, non asperiores repellat.
            </p>

            <button className="text-sm flexContainer textPrimary gap-2 mx-auto mt-2">
              <span> Read More</span>
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </main>
        </div>

        {/* Card 2 */}
        <div className="border px-4 py-12 shadow-md">
          <header>
            <img className="h-10 w-10 mx-auto" src={mosque} alt="" />
          </header>

          <main className="text-center mt-3 ">
            <h1 className="font-semibold ">Mosque Development</h1>
            <p className="text-xs px-3 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem vitae adipisci dolore, non asperiores repellat.
            </p>

            <button className="text-sm flexContainer textPrimary gap-2 mx-auto mt-2">
              <span> Read More</span>
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </main>
        </div>

        {/* Card 3 */}
        <div className="border px-4 py-12 shadow-md">
          <header>
            <img className="h-10 w-10 mx-auto" src={heart} alt="" />
          </header>

          <main className="text-center mt-3 ">
            <h1 className="font-semibold ">Charity Service</h1>
            <p className="text-xs px-3 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem vitae adipisci dolore, non asperiores repellat.
            </p>

            <button className="text-sm flexContainer textPrimary gap-2 mx-auto mt-2">
              <span> Read More</span>
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </main>
        </div>

        {/* Card 4 */}
        <div className="border px-4 py-12 shadow-md">
          <header>
            <img className="h-10 w-10 mx-auto" src={help} alt="" />
          </header>

          <main className="text-center mt-3 ">
            <h1 className="font-semibold ">Help Poor's</h1>
            <p className="text-xs px-3 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem vitae adipisci dolore, non asperiores repellat.
            </p>

            <button className="text-sm flexContainer textPrimary gap-2 mx-auto mt-2">
              <span> Read More</span>
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </main>
        </div>
      </main>

      <footer className="mt-6 text-center">
        <button className="btnSecondary">Donate Now</button>
      </footer>
    </div>
  );
};

export default Donate;
