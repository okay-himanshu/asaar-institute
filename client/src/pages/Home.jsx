import { AppSection, EmailUs, Hero, Wrapper } from "../components";
import About from "./user/About";

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <About />
      <AppSection />
      <EmailUs />
    </Wrapper>
  );
}
