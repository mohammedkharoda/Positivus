import "./style.css";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Sponsor from "./components/Sponsor.tsx";
import Services from "./components/Services.tsx";
import Proposal from "./components/Proposal.tsx";
import CaseStudy from "./components/CaseStudy.tsx";
import OurWorking from "./components/OurWorking.tsx";
import ContactUs from "./components/ContactUs.tsx";
import Footer from "./components/Footer.tsx";
import MaxWrapper from "./wrappers/MaxWrappers.tsx";
import SecondaryWrapper from "./wrappers/SecondaryWrappers.tsx";
import ScrollToTop from "./atoms/scrollToTop.tsx";

const App = () => {
  return (
    <MaxWrapper>
      <SecondaryWrapper>
        <div className="flex flex-col gap-[70px]">
          <Navbar />
          <Hero id="hero" />
          <Sponsor id="sponsor" />
          <Services id="services" />
          <Proposal id="proposal" />
          <CaseStudy id="case_study" />
          <OurWorking id="our_working" />
          <ContactUs id="contact_us" />
          <Footer />
          <ScrollToTop />
        </div>
      </SecondaryWrapper>
    </MaxWrapper>
  );
};

export default App;
