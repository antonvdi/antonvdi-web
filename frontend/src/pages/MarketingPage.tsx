import Divider from "@mui/material/Divider";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import Ydelser from "../components/Ydelser";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Inspiration from "../components/Inspiration";
import Contact from "../components/Contact";

export default function MarketingPage() {
  return (
    <>
      <AppAppBar />
      <Hero />
      <div>
        <Divider />
        <Inspiration />
        <Divider />
        <Ydelser />
        <Divider />
        <Contact />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </>
  );
}
