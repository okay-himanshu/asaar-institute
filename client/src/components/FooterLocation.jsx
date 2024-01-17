import { BiHeadphone } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiBuildingsFill } from "react-icons/pi";

import { Wrapper } from ".";
export default function FooterLocation() {
  return (
    <Wrapper className={"pt-10 pb-4"}>
      <hr />
      <div className="relative   py-5 text-color_white text-xs flex flex-col items-center w-440:flex-row  flex-wrap sm:flex-row   justify-between">
        <section className=" absolute top-9 left-0 w-500:static w-fit  ">
          <h1 className="  text-3xl  font-extrabold bg-color_white text-color_black px-2 py-1 rounded-sm">
            ASAAR
          </h1>
        </section>
        <div className=" w-full w-500:w-[70%] w-850:w-[85%] pt-20 w-500:pt-0 w flex flex-col flex-wrap w-850:flex-nowrap w-500:flex-row justify-between ">
          <section className="flex items-center my-2 gap-3 w-full w-500:w-1/2">
            <div>
              <PiBuildingsFill size={35} className="text-[#999999]" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#999999]">Visit Our Location</h1>
              <p>Aurangabad bihar</p>
            </div>
          </section>
          <section className="flex items-center my-2 gap-3 w-full w-500:w-1/2">
            {" "}
            <div>
              <IoMdCall size={35} className="text-[#999999]" />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[#999999] w-30">Give Us a Call</h1>
              <p className="w-14">+910987654321 +911234567890</p>
            </div>
          </section>
          <section className="flex items-center my-2 gap-3 w-full w-500:w-1/2">
            <div>
              <BiHeadphone size={35} className="text-[#999999]" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#999999]">Get Support</h1>
              <p>Click Here</p>
            </div>
          </section>
          <section className="flex items-center my-2 gap-3 w-full w-500:w-1/2">
            {" "}
            <div>
              <MdEmail size={35} className="text-[#999999]" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#999999]">Email US</h1>
              <p>info@asaarinstitute.com</p>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}
