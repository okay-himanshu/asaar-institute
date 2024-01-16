import { Button, Wrapper } from ".";
import { email_icon } from "../assets/images";

export default function EmailUs() {
  return (
    <main className="bg-[#1a76ef] my-5 rounded-lg ">
      <h1 className="text-center  pt-10 uppercase text-white text-3xl font-extrabold">
        - Email Us -
      </h1>
      <Wrapper className="flex items-center sm:gap-10 w-850:gap-20 py-10">
        <section className="hidden sm:flex">
          <img src={email_icon} alt="email_icon" className="w-[30rem] " />
        </section>
        <section className="w-full">
          <form className="space-y-4 text-white mt-5 px-2 md:px-6">
            <div>
              <label className="block mb-1  ml-1 text-sm font-medium   ">
                Your Email *
              </label>
              <input
                type="email"
                className=" text-black  text-sm rounded-lg block w-full py-4 px-2 border-gray-400"
                placeholder="marvinallen@gmail.com"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block mb-1  ml-1 text-sm font-medium ">
                Your message *
              </label>
              <textarea
                id="message"
                rows="6"
                className="block py-4 px-2  w-full text-sm text-black  rounded-lg shadow-sm  border-gray-400"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
          </form>
        </section>
      </Wrapper>
    </main>
  );
}
