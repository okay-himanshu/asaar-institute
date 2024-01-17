import { AboutCard } from "../../components";
import {
  aboutIconOne,
  aboutIconTwo,
  aboutIconThree,
  aboutIconFour,
} from "../../assets/images";
import { FaRegHandshake } from "react-icons/fa6";

export default function About() {
  const aboutIcons = [
    {
      image: aboutIconOne,
      title: "30 Lac+",
      description: "Students Mentored ",
    },
    {
      image: aboutIconTwo,
      title: "3.3 Lac+",
      description: "Students in OFFLINE Class ",
    },
    {
      image: aboutIconThree,
      title: "10",
      description: "Presence in Cities ",
    },
    {
      image: aboutIconFour,
      title: "240+",
      description: "Classroom Campuses",
    },
  ];

  return (
    <>
      <div className="mt-10 mb-5">
        <h1 className="text-xl w-440:text-2xl font-semibold text-color_gray cursor-pointer flex items-center gap-2">
          <FaRegHandshake className="text-2xl w-440:text-4xl" /> Know about
          <h1 className="text-xl w-440:text-3xl font-bold">ASAAR</h1>
        </h1>
      </div>
      <main className="mt-3 flex flex-col w-850:flex-row items-start xl:justify-between gap-2 text-sm text-color_black">
        <section className=" w-full w-850:w-4/6">
          <div className="mt-1">
            <p className="w-full">
              A Premier Coaching Institute for the preparation of JEE
              (Main+Advanced), JEE (Main), Pre-Medical (NEET-UG), Pre-Nurture &
              Career Foundation (Class VI to X, NTSE & Olympiads) and Commerce
              Education (11th, 12th, CA & CS). The Institute is well regarded
              for the high quality entrance exam preparation and produces best
              results year after year. At Asaar Institute, We focus on building
              a strong foundation of knowledge and concepts in students for
              their success and provide an excellent platform for the
              preparation of competitive exams and board level education. The
              best academic support and personal care which we provide to the
              students, helps them meet their career goals and objectives. The
              core values of Determination, Honesty, Authenticity, Integrity,
              Devotion, Humanism, Holistic Learning, Social Ethics, and concern
              for society & environment are all closely interwoven into the
              fiber of our academic programs. Our highly qualified and most
              experienced faculties are dedicated and committed to student’s
              complete success and provide assistive surroundings to contribute
              to their social, cultural, academic and all-round development.
            </p>

            <p className="mt-4">
              To our students, we impart value-based career education, abundant
              resources, and individual attention. To the parents, we have a
              responsibility to nurture ethical and responsible career
              leadership in the children. To the society, we provide a lifelong
              connection to ethics and excellence in global leaders.
            </p>
          </div>
        </section>
        <section className="">
          <AboutCard icons={aboutIcons} />
        </section>
      </main>
    </>
  );
}
