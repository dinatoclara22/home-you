import Footer from '../components/Footer';
import Galeria from '../components/Galeria';
import Header from '../components/Header';
import Minimalista from '../components/Minimalista';
import Orcamento from '../components/Orçamento';
import Principal from '../components/Principal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({duration: 1500});
  }, []);

  return (
    <>
      <Header />
      <Principal />
      <Minimalista />
      <Galeria />
      <Orcamento />
      <Footer />
    </>
  );
}

export default App;
