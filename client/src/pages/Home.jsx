import { App, Hero, Wrapper } from "../components";
import About from "./user/About";

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <About />
      <App />
    </Wrapper>
  );
}
