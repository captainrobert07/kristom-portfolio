import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Impact from './components/Impact';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Capabilities />
      <Impact />
      <Experience />
      <Stack />
      <Recognition />
      <Contact />
      <Footer />
    </main>
  );
}
