import { Benefits } from "@/components/benefits";
import { Footer } from "@/components/footer";
import { Founders } from "@/components/founders";
import { Hero } from "@/components/hero";
import { VideoSection } from "@/components/video-section";
import { WaveDivider } from "@/components/wave-divider";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
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
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default Home;
