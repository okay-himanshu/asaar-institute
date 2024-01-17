export default function AboutCard({ icons }) {
  return (
    <main className="flex flex-wrap  justify-center w-850:justify-end ">
      {icons?.map((icon, index) => (
        <section
          key={index}
          className=" flex flex-col gap-2  items-center p-10 w-850:px-4 lg:px-12  py-4 bg-white m-1 w-850:m-1.5 shadow rounded-md 
         w-full w-550:w-1/3 w-850:w-52 "
        >
          <img src={icon.image} alt={icon.title} className="w-10" />
          <p className="text-2xl font-semibold text-green-600">{icon.title}</p>
          <p className="w-1/2 text-center">{icon.description}</p>
        </section>
      ))}
    </main>
  );
}
