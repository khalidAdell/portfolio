import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Portfolio,
  Services,
  Skills,
  UpBtn,
} from "./components";
import Testimoial from "./components/testimoial/Testimoial";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Portfolio />
        {/* <Testimoial /> */}
        <Contact />
      </main>
      <Footer />
      <UpBtn />
    </div>
  );
};

export default App;
