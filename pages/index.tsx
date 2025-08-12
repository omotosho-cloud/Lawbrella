import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import HelpAccordion from '../components/HelpAccordion';
import TakingControl from '../components/TakingControl';
import Testimonials from '../components/Testimonials';
import Partnerships from '../components/Partnerships';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>MyLawbrella</title>
        <meta name="description" content="Private support service for survivors of intimate image abuse." />
      </Head>

      <main className="bg-white text-primary">
        <Hero />
        <About />
        <HelpAccordion />
        <TakingControl />
        <Testimonials />
        <Partnerships />
        <Footer />
      </main>
    </>
  );
}
