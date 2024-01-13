import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Header, Navbar } from "../components";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
