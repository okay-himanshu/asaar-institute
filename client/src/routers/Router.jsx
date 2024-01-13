// icons
import { FaSchool } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { RiVideoFill } from "react-icons/ri";
import { MdCurrencyRupee } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { BiSolidLogInCircle } from "react-icons/bi";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Header, Navbar } from "../components";

export default function Router() {
  const routes = [
    {
      name: "admission",
      element: <Home />,
      icon: <FaSchool />,
      children: [
        {
          name: "enquiry forum",
          path: "/enquiry-forum",
          element: <Home />,
          icon: <SiGoogleforms />,
        },
        {
          name: "courses",
          path: "/courses",
          element: <Home />,
          icon: <RiVideoFill />,
        },
        {
          name: "fee",
          path: "/fee",
          element: <Home />,
          icon: <MdCurrencyRupee />,
        },
      ],
    },
    {
      name: "administration",
      element: <Home />,
      icon: <GrUserAdmin />,
      children: [
        {
          name: "class schedule",
          path: "/class-schedule",
          element: <Home />,
          icon: <FaCalendarAlt />,
        },
        {
          name: "test schedule",
          path: "/test-schedule",
          element: <Home />,
          icon: <FaCalendarAlt />,
        },
      ],
    },
    {
      name: "result",
      element: <Home />,
      icon: <IoIosPaper />,
      children: [
        {
          name: "scholarship",
          path: "/scholarship",
          element: <Home />,
          icon: <FaGraduationCap />,
        },
        {
          name: "test result",
          path: "/test-result",
          element: <Home />,
          icon: <IoIosPaper />,
        },
        {
          name: "periodic test result",
          path: "/periodic-test-result",
          element: <Home />,
          icon: <IoIosPaper />,
        },
        {
          name: "director's message",
          path: "/directors-message",
          element: <Home />,
          icon: <RiMessage2Fill />,
        },
      ],
    },
    {
      name: "student corner",
      element: <Home />,
      icon: <PiStudentFill />,
      children: [
        {
          name: "student login",
          path: "/student-login",
          element: <Home />,
          icon: <BiSolidLogInCircle />,
        },
        {
          name: "parent login",
          path: "/parent-login",
          element: <Home />,
          icon: <BiSolidLogInCircle />,
        },
      ],
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar routes={routes} />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children?.map((child, index) => (
                <Route key={index} path={child.path} element={child.element} />
              ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
