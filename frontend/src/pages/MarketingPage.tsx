import Divider from "@mui/material/Divider";
import AppAppBar from "../components/AppAppBar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Examples from "../components/Examples";

export default function MarketingPage() {
  return (
    <>
      <AppAppBar />
      <Hero />
      <div>
        <Divider />
        <Examples />
        {/* <LogoCollection /> */}
        {/* <Features /> */}
        {/* <Divider /> */}
        {/* <Testimonials /> */}
        <Divider />
        <Highlights />
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
