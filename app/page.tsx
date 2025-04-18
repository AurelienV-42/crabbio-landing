import { Benefits } from "@/components/benefits";
import { Footer } from "@/components/footer";
import { Founders } from "@/components/founders";
import { Hero } from "@/components/hero";
import { VideoSection } from "@/components/video-section";
import { WaveDivider } from "@/components/wave-divider";

export default function Home() {
  return (
    <main className="min-h-screen bg-crabbio-blue text-crabbio-cream overflow-hidden">
      <Hero />
      <WaveDivider />
      <VideoSection />
      <WaveDivider flip />
      <Benefits />
      <WaveDivider />
      <Founders />
      <WaveDivider flip />
      <Footer />
    </main>
  );
}
