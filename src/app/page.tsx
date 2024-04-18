import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Container from './Components/Container/container';
import Developers from './Components/Developers/developers';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Intro from './Components/Intro/intro';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Container>
        <Intro></Intro>
      </Container>
      <About></About>
      <Developers></Developers>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
