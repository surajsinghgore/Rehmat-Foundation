import style from "./page.module.css";
import { FaRegCalendar } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";

import CountDownTimer from "../CountDownTimer/page";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className={style.homeBannerContainer}>
        <div className={style.HomeBanner}>
          <div className={style.textHeading}>
            Living a life of Truth, believe in one God (creator of universe),
            respect for others, and high moral standards.
          </div>
        </div>
        {/* upcoming */}

        <div className={style.upcomingEvent}>
          <div className={style.date}>
            <div>
              <h2>25 DEC</h2>
              <h2> 2024</h2>
            </div>
          </div>

          <div className={style.eventDetails}>
            <h1>
              <Link href="/UpcomingEvent">
                Upcoming Event : 3rd SHAHEEDI JODMEL OF CHAAR SAHIBZADE
              </Link>{" "}
            </h1>
            <h2>
              {" "}
              <span>
                <FaRegCalendar />{" "}
              </span>{" "}
              10:00 AM
            </h2>
            <h2>
              {" "}
              <span>
                {" "}
                <VscLocation />
              </span>{" "}
              Gurudwara Sahib Bagh Saheeda Sector 44 Chandigarh
            </h2>
          </div>

          <CountDownTimer date={"25.12.2024"} time={"10.00"} />
        </div>
      </div>

      {/* poaster */}

      <div class="flex flex-wrap items-center justify-center bg-gray-50 p-6 rounded-lg">
        <div class="w-full md:w-96 p-4">
          <img
            src="https://res.cloudinary.com/du68kdw3m/image/upload/v1734195076/rehmat_vxoao3.jpg"
            alt="Blood Donation Camp"
            class="rounded-lg shadow-md w-full h-auto"
          />
        </div>

        <div class="w-full md:w-1/2 p-6 text-center md:text-left">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Upcoming Event
          </h2>
          <p class="text-base md:text-lg text-gray-600 mb-4">
            3rd SHAHEEDI JODMEL OF CHAAR SAHIBZADE
          </p>
          <p class="text-base md:text-lg text-gray-600 mb-6">
            <strong>Date:</strong> 25th December 2024
          </p>
          <p class="text-base md:text-lg text-gray-600 mb-6">
            <strong>Venue:</strong> Gurudwara Sahib Baag Saheeda, Sector 44-A,
            Chandigarh
          </p>
          <p class="text-sm md:text-base text-gray-700 font-medium">
            Your participation can save lives. All are requested to donate blood
            to support thalassaemic patients.
          </p>
        </div>
      </div>

      <div class="w-full mt-3 mb-20 flex flex-wrap items-center justify-center gap-4 md:gap-14">
        <div class="w-full md:w-96 h-[90%] flex items-center justify-center">
          <video class="w-full md:w-[450px]" controls>
            <source
              src="https://res.cloudinary.com/du68kdw3m/video/upload/v1734195076/vid1_ljzyiv.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="w-full md:w-96 h-[90%] flex items-center justify-center">
          <video class="w-full md:w-[450px]" controls>
            <source
              src="https://res.cloudinary.com/du68kdw3m/video/upload/v1734195076/vid3_bfamqt.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="w-full md:w-96 h-[90%] flex items-center justify-center">
          <video class="w-full md:w-[450px]" controls>
            <source
              src="https://res.cloudinary.com/du68kdw3m/video/upload/v1734195076/vid2_jhgcyh.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
