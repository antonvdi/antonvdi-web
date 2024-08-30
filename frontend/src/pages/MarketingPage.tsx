import Divider from "@mui/material/Divider";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import Ydelser from "../components/Ydelser";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Inspiration from "../components/Inspiration";

export default function MarketingPage() {
  return (
    <>
      <AppAppBar />
      <Hero />
      <div>
        <Divider />
        <Inspiration />
        {/* <LogoCollection /> */}
        {/* <Features /> */}
        {/* <Divider /> */}
        {/* <Testimonials /> */}
        <Divider />
        <Ydelser />
        {/* <Divider /> */}
        {/* <Pricing /> */}
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </>
  );
}
