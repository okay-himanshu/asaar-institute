import { FaHome } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosPeople,
  IoMdImage,
} from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { IoNewspaper } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";

import Button from "./Button";
import Wrapper from "./Wrapper";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <main className="bg-color_black">
      <Wrapper className="bg-color_black text-color_white flex items-start w-850:items-center uppercase justify-between  text-[10px] py-2.5">
        <section className="flex flex-col w-850:flex-row items-start w-850:items-center gap-3 w-850:gap-2.5 py-2 w-850:p-0 ">
          <div className="flex items-center gap-2">
            <NavLink className="flex items-center gap-2 hover:text-green-600 duration-150">
              <FaHome size={12} />
              <h1 className="letter-spacing">Home </h1>
            </NavLink>
            <div>|</div>
            <div className="flex items-center gap-2">
              <Button
                icon={<MdOutlineLaptopMac size={12} />}
                title={"Enquiry"}
                className="w-850:hidden letter-spacing bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full px-2 w-320:px-4 py-1 text-[10px] border-none uppercase "
              />
              <Button
                title={"Login"}
                icon={<RiLoginCircleFill />}
                className="w-850:hidden letter-spacing bg-green-600 rounded-full  px-1 w-320:px-4 py-1 text-[10px] border-none uppercase "
              />
            </div>
          </div>

          <div
            className={`${
              toggle ? "flex " : "hidden w-850:flex"
            } flex-col gap-2 items-start w-850:flex-row w-850:items-center w-850:gap-4 `}
          >
            <NavLink className="pt-2 w-850:pt-0 flex items-center gap-2 hover:text-green-600 duration-150">
              <IoMdImage size={12} />
              <h1 className="letter-spacing"> gallery</h1>
            </NavLink>
            <div className="hidden w-850:block">|</div>
            <NavLink className="flex items-center gap-2 hover:text-green-600 duration-150">
              <IoNewspaper size={12} />
              <h1 className="letter-spacing">news room</h1>
            </NavLink>
            <div className="hidden w-850:block  ">|</div>
            <NavLink className="flex items-center gap-2 hover:text-green-600 duration-150">
              <IoIosPeople size={12} />
              <h1 className="letter-spacing">employee zone</h1>
            </NavLink>
          </div>
        </section>
        <section className="hidden w-850:flex">
          <div className="flex items-center gap-2">
            <NavLink className="letter-spacing flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-1 rounded-full font-semibold">
              <FaHeadphonesAlt /> ENQUIRY
            </NavLink>
            <div className="hidden w-850:block">|</div>
            <Button
              title={"Login"}
              icon={<RiLoginCircleFill />}
              className="letter-spacing font-semibold bg-green-600 rounded-full  px-4 py-1  border-none uppercase "
            />
          </div>
        </section>

        <section
          className="w-850:hidden pt-3  text-base cursor-pointer"
          onClick={handleToggle}
        >
          {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </section>
      </Wrapper>
    </main>
  );
}
