import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Sponsor from "./components/Sponsor.tsx";
import Services from "./components/Services.tsx";
import Proposal from "./components/Proposal.tsx";
import CaseStudy from "./components/CaseStudy.tsx";
import OurWorking from "./components/OurWorking.tsx";
import ContactUs from "./components/ContactUs.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col gap-[70px]">
        <Navbar />
        <Hero />
        <Sponsor />
        <Services />
        <Proposal />
        <CaseStudy />
        <OurWorking />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
