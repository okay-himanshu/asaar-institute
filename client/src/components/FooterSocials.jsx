import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import {
  FaLinkedin,
  FaYoutube,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import { MdHorizontalRule } from "react-icons/md";

import Wrapper from "./Wrapper";

export default function FooterSocials() {
  return (
    <>
      <Wrapper className="text-xs text-[#999999] flex items-center justify-between flex-col sm:flex-row">
        <section className="text-center sm:text-start my-3">
          <h1>ASAAR CAREER INSTITUTE </h1>
          <h1>(CIN: U80100RJ2021PTC077131)</h1>
          <h1>
            Registered & Corporate Office : “SANKALP”, CP-6, Indra Vihar, Kota
            (Rajasthan) - 324005
          </h1>
        </section>
        <section className="flex gap-3 items-center ">
          <RiWhatsappFill className="text-2xl w-440:text-4xl border   p-1.5   rounded-full   hover:bg-[#0000001e] hover:text-[#25D366] duration" />
          <BsTwitterX className="text-2xl w-440:text-4xl border  p-1.5 hover:text-green-40 rounded-full   hover:bg-[#0000001e] hover:text-blue-300 duration" />
          <FaLinkedin className="text-2xl w-440:text-4xl border  p-1.5 hover:text-green-40 rounded-full   hover:bg-[#0000001e] hover:text-blue-600 duration" />
          <FaYoutube className="text-2xl w-440:text-4xl border  p-1.5 hover:text-green-40 rounded-full   hover:bg-[#0000001e] hover:text-[#FF0000] duration" />
          <FaFacebookF className="text-2xl w-440:text-4xl border  p-1.5 hover:text-green-40 rounded-full   hover:bg-[#0000001e] hover:text-[#316FF6] duration" />
          <FaTelegramPlane className="text-2xl w-440:text-4xl border  p-1.5 hover:text-green-40 rounded-full   hover:bg-[#0000001e] hover:text-[#0088cc] duration" />
          <RiInstagramFill className="text-2xl w-440:text-4xl border  p-1.5 hover:text-green-40 rounded-full   hover:bg-[#0000001e] hover:text-[#8a3ab9] duration" />
        </section>
      </Wrapper>
      <Wrapper className={""}>
        <hr className="mt-5" />
        <p className="text-xs text-[#999999] text-center mt-6 flex justify-center items-center gap-3">
          <MdHorizontalRule className="hidden w-440:flex" /> ASAAR Career
          Institute © All Rights Reserved{" "}
          <MdHorizontalRule className="hidden w-440:flex" />
        </p>
        <p className="text-xs text-[#999999] text-center mt-3 ">
          Made by Himanshu Tiwari
        </p>
      </Wrapper>
    </>
  );
}
