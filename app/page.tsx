import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import BootLoader from "@/components/BootLoader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ThreatMap from "@/components/ThreatMap";
import Projects from "@/components/Projects";
import Certs from "@/components/Certs";
import Education from "@/components/Education";
import Writeups from "@/components/Writeups";
import GithubFeed from "@/components/GithubFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <BootLoader />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <ThreatMap />
      <Projects />
      <Certs />
      <Education />
      <Writeups />
      <GithubFeed />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}