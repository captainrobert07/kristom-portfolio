import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Impact from './components/Impact';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Recognition from './components/Recognition';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgressRail from './components/ProgressRail';
import Marquee from './components/Marquee';
import BackgroundField from './components/BackgroundField';
import Cursor from './components/Cursor';

const TOOLS_BAND = [
  'Power BI', 'Tableau', 'SQL', 'SAS', 'Power Automate', 'Salesforce',
  'Python', 'Generative AI', 'Azure ADLS', 'Power Apps', 'Excel', 'ETL',
];

const PROOF_BAND = [
  '€20M Outcomes', '90% Reporting Automated', '60+ Reports Governed',
  '11 Internal Awards', 'Stevie Gold Medal', '4 Years · Allianz', 'UK · AU · IN',
];

export default function App() {
  return (
    <main className="relative text-white">
      <BackgroundField />
      <ProgressRail />
      <Cursor />
      <Hero />
      <About />
      <Marquee items={TOOLS_BAND} speed={50} />
      <Capabilities />
      <Impact />
      <Marquee items={PROOF_BAND} speed={45} reverse />
      <Experience />
      <Stack />
      <Recognition />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
