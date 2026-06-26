import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import SocialProof from "../components/SocialProof";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <SocialProof />
      <Footer />
    </main>
  );
}
