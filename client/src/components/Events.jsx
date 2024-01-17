import { useState, useEffect, useRef } from "react";
import { eventImages } from "./EventImg";
import { MdEmojiEvents } from "react-icons/md";
import Button from "./Button";

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const intervalId = setInterval(() => {
      const nextScrollPosition = (currentIndex + 1) * 200;

      const maxScrollWidth = container.scrollWidth - container.clientWidth;
      const updatedScrollPosition =
        nextScrollPosition > maxScrollWidth ? 0 : nextScrollPosition;

      container.scrollTo({
        left: updatedScrollPosition,
        behavior: "smooth",
      });

      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <div className="my-10 flex items-center justify-between flex-col w-320:flex-row ">
        <h1 className="text-xl w-440:text-2xl font-semibold text-color_gray flex items-center gap-2">
          <MdEmojiEvents className="text-2xl w-440:text-4xl" /> Events At
          <h1 className="text-xl w-440:text-3xl font-bold">ASAAR</h1>
        </h1>
        <Button
          title={"view all "}
          className={"px-4 py-1 rounded-full w-full w-320:w-fit my-2"}
        />
      </div>
      <main
        ref={containerRef}
        className="flex justify-start overflow-x-hidden overflow-y-hidden"
      >
        <section className="flex gap-2">
          {eventImages.map((dtx, index) => (
            <main key={index} className="min-w-[10rem] sm:min-w-[20rem]  ">
              <img
                src={dtx.src}
                alt={dtx.name}
                className="w-full hover:scale-105 hover:brightness-50 duration-150"
              />
            </main>
          ))}
        </section>
      </main>
    </>
  );
}
