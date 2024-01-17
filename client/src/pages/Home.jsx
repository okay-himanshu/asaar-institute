import { AppSection, EmailUs, Events, Hero, Wrapper } from "../components";
import { eventImages } from "../components/EventImg";
import About from "./user/About";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Hero />
        <About />
        <Events />
        <AppSection />
        <EmailUs />
      </Wrapper>
    </main>
  );
}
