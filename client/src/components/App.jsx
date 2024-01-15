import { google_store, app_store, iPhone } from "../assets/images";
export default function App() {
  return (
    <main className="flex flex-col w-850:flex-row justify-between px-10 items-center mt-10 bg-white rounded-md shadow-xl py-20">
      <section className="w-500:w-[80%]  text-center w-850:w-[40%] w-850:text-start">
        <h1 className="text-3xl font-bold text-color_gray cursor-pointer flex items-center gap-2  rem]">
          Admission Information through ASAAR App
        </h1>
        <p className="mt-5 text-center  w-850:w-[30rem] w-850:text-start">
          ASAAR Info and admission app is here to provide all the admission info
          and solve related queries.
        </p>
        <div className="flex flex-col w-440:flex-row items-center justify-center w-850:justify-start gap-4 mt-5 ">
          <img
            src={google_store}
            alt="google play"
            className="w-40 hover:scale-110 duration-150"
          />
          <img
            src={app_store}
            alt="app store"
            className="w-40  hover:scale-110 duration-150"
          />
        </div>
      </section>
      <section className="flex-row-reverse relative hidden w-850:flex">
        <img src={iPhone} alt="iphone" className="h-80 z-20" />
        <img
          src={iPhone}
          alt="iphone"
          className=" hidden w-850:flex h-80 -rotate-90 absolute -bottom-20 right-20"
        />
      </section>
    </main>
  );
}
