
import './App.css';
import Banner from './Components/Banner/banner';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/navbar';
import Offer from './Components/Offer/offer';
import Products from './Components/Products/products';
import Special from './Components/Special/special';
import Testimonials from './Components/Testimonials/testimonials';

function App() {
  return (
        <>  

          <Navbar />
          <Banner />
          <Offer />
          <Products />
          <Special />
          <Testimonials />
          <Contact />
          <Footer />
        </>
  );
}

export default App;
