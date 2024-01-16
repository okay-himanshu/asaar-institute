import { FooterLocation, FooterSocials, Wrapper } from ".";

export default function Footer() {
  return (
    <main className="bg-[#141b23] py-5">
      <Wrapper className=" text-color_white text-sm flex flex-col w-440:flex-row justify-center flex-wrap sm:flex-row   sm:justify-between ">
        <section className="w-full w-440:w-1/2 sm:w-fit">
          <h1 className="text-base font-semibold my-4">About US</h1>
          <ul className="list-disc text-[13px] flex flex-col gap-3 text-[#999999] ml-4">
            <li className="hover:pl-1 duration-150">About ASAAR</li>
            <li className="hover:pl-1 duration-150">Our Team</li>
            <li className="hover:pl-1 duration-150"> Our Inspiration</li>
            <li className="hover:pl-1 duration-150">Director's Message</li>
          </ul>
        </section>
        <section className="w-full w-440:w-1/2 sm:w-fit">
          <h1 className="text-base font-semibold my-4">Courses</h1>
          <ul className="list-disc text-[13px] flex flex-col gap-3 text-[#999999] ml-4">
            <li className="hover:pl-1 duration-150">About ASAAR</li>
            <li className="hover:pl-1 duration-150">Our Team</li>
            <li className="hover:pl-1 duration-150"> Our Inspiration</li>
            <li className="hover:pl-1 duration-150">Director's Message</li>
          </ul>
        </section>
        <section className="w-full w-440:w-1/2 sm:w-fit">
          <h1 className="text-base font-semibold my-4">Why ASSAR</h1>
          <ul className="list-disc text-[13px] flex flex-col gap-3 text-[#999999] ml-4">
            <li className="hover:pl-1 duration-150">About ASAAR</li>
            <li className="hover:pl-1 duration-150">Our Team</li>
            <li className="hover:pl-1 duration-150"> Our Inspiration</li>
            <li className="hover:pl-1 duration-150">Director's Message</li>
          </ul>
        </section>
        <section className=" w-full w-440:w-1/2 sm:w-fit">
          <h1 className="text-base font-semibold my-4">Why ASSAR</h1>
          <ul className="list-disc text-[13px] flex flex-col gap-3 text-[#999999] ml-4">
            <li className="hover:pl-1 duration-150">About ASAAR</li>
            <li className="hover:pl-1 duration-150">Our Team</li>
            <li className="hover:pl-1 duration-150"> Our Inspiration</li>
            <li className="hover:pl-1 duration-150">Director's Message</li>
          </ul>
        </section>
      </Wrapper>

      <FooterLocation />
      <FooterSocials />
    </main>
  );
}
