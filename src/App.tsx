import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Sponsor from "./components/sponsor.tsx";
import Services from "./components/Services.tsx";
import Proposal from "./components/Proposal.tsx";

const App = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col gap-[70px]">
        <Navbar />
        <Hero />
        <Sponsor />
        <Services />
        <Proposal />
      </div>
    </div>
  );
};

export default App;
