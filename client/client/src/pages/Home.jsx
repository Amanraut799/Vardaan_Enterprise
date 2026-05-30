import Hero from "../components/Hero";
import About from "../components/About";
import CEO from "../components/Services";
import Counter from "../components/Counter";
import Goals from "../components/Goals";
import ClientsMarquee from "../components/ClientsMarquee";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Goals />
      <CEO />
      {/* <Counter /> */}
      <ClientsMarquee />
      
    </>
  );
}

export default Home;