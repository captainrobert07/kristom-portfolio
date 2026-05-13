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
import {
  ViewportFrame,
  CursorTrail,
  LogoWall,
  DividerBand,
} from './components/Polish';

const TOOLS_BAND = [
  'Power BI', 'Tableau', 'SQL', 'SAS', 'Power Automate', 'Salesforce',
  'Python', 'Generative AI', 'Azure ADLS', 'Power Apps', 'Excel', 'ETL',
];

export default function App() {
  return (
    <main className="relative text-white">
      <BackgroundField />
      <ViewportFrame />
      <ProgressRail />
      <Cursor />
      <CursorTrail count={6} />

      <Hero />
      <About />
      <Marquee items={TOOLS_BAND} speed={50} />
      <Capabilities />

      {/* Silent intermission band — replaces the second marquee */}
      <DividerBand
        quote="Most dashboards die in a drawer. Mine don't."
        attr="Working principle"
      />

      <Impact />

      {/* Logo wall — credentials over a duplicate marquee */}
      <LogoWall />

      <Experience />
      <Stack />
      <Recognition />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
