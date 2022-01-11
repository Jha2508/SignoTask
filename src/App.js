
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import OurClient from './Components/OurClient';
import Footer from './Components/Footer';
import NewsLetter from './Components/NewsLetter';
import Testimonials from './Components/Testimonials';
import Business from './Components/Business';

function App() {
  var w = window.innerWidth;
  if(w<800){
    return(
      <div> Please Open the website on a laptop or PC.</div>
    );
  }
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <OurClient/>
        <Business/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
