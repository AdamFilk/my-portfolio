
import '../index.css';
import Hero from '../components/Hero';
import Bio from '../components/Bio';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Exp from '../components/Exp';

function Home() {
  return (
    <div className="App">
      <Hero></Hero>
      <Bio></Bio>
      <Education></Education>
      <Skills></Skills>
      <Exp></Exp>
    </div>
  );
}

export default Home;
