import { IoIosMenu } from "react-icons/io";

import { NavLink } from "react-router-dom";
import { Button } from ".";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-10 py-5 relative">
        <section className="text-3xl font-bold text-color_sky_blue cursor-pointer">
          ASAAR
        </section>

        <section className="flex items-center">
          <div className="absolute left-0 top-20 bg-color_black flex flex-col items-start px-10 py-5 md:p-0 md:p-y-0 md:static  md:flex-row md:items-center  gap-5 text-color_gray uppercase font-medium md:bg-[#fff] w-full ">
            <div className="flex flex-col items-start gap-2 md:gap-6 md:flex-row text-sm ">
              <NavLink
                to="/"
                className="hover:text-color_light_gray duration-150"
              >
                Course
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-color_light_gray duration-150"
              >
                Admission
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-color_light_gray duration-150"
              >
                Contact
              </NavLink>
              <NavLink
                to="/"
                className="hover:text-color_light_gray duration-150"
              >
                About
              </NavLink>
            </div>

            <div className="flex items-center gap-4 ">
              <Button title="Login" />
              <Button title="Signup" />
            </div>
          </div>

          <section className=" md:hidden">
            <IoIosMenu size={30} className="cursor-pointer" />
          </section>
        </section>
      </nav>
    </>
  );
}
