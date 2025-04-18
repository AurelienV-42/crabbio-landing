import { Hero } from '@/components/hero';
import { VideoSection } from '@/components/video-section';
import { Benefits } from '@/components/benefits';
import { Founders } from '@/components/founders';
import { WaveDivider } from '@/components/wave-divider';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-crabbio-blue text-crabbio-cream overflow-hidden">
      <Hero />
      <WaveDivider />
      <VideoSection />
      <WaveDivider />
      <Benefits />
      <WaveDivider flip />
      <Founders />
      <WaveDivider />
      <Footer />
    </main>
  );
}