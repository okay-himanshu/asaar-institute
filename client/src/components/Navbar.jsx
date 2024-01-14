import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Wrapper } from "./";

export default function Navbar({ routes }) {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);
  const [toggle, setToggle] = useState(false);

  const toggleSection = (index) =>
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));

  const toggleMenu = () => setToggle(!toggle);

  return (
    <Wrapper className="flex items-start justify-between">
      <nav className="flex flex-col w-full justify-between items-start py-5  w-850:flex-row w-850:items-center">
        <section className="text-3xl font-extrabold text-color_sky_blue cursor-pointer">
          ASAAR
        </section>

        <div
          className={`${
            toggle ? "block" : "hidden"
          } z-index-20 w-850:flex w-850:flex-row w-full w-850:w-fit flex-col gap-4 items-start  uppercase text-sm mt-2 relative`}
        >
          {routes.map((route, index) => (
            <div key={index} className="">
              <div
                onClick={() => toggleSection(index)}
                className="flex  items-center gap-2 cursor-pointer w-850:font-semibold border  rounded-md py-4 px-2 w-850:border-none  w-full  text-color_gray hover:text-green-600   duration-150"
              >
                {route.icon} {route.name}
              </div>

              {route.children && openSectionIndex === index && (
                <div className="w-850:absolute top-12  capitalize">
                  {route.children.map((child, childIndex) => (
                    <NavLink
                      key={childIndex}
                      to={child.path}
                      className={"w-full"}
                    >
                      <div className=" w-full z-10 divide-y divide-gray-100  border border-gray-100 bg-white shadow-md w-850:shadow-lg">
                        <div className="py-1.5 px-4">
                          <h1 className="flex w-full items-center gap-2 rounded-lg px-1 py-2 text-sm text-color_gray hover:bg-gray-50 hover:text-gray-700 pl-6 w-850:pl-0">
                            {child.icon} {child.name}
                          </h1>
                        </div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      <div
        className="w-850:hidden pt-7 text-lg cursor-pointer"
        onClick={toggleMenu}
      >
        <IoIosMenu />
      </div>
    </Wrapper>
  );
}
