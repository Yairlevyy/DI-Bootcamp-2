import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import one from './assets/one.jpg'

function App() {
  return (
    <div>
      <Carousel>
          <div>
            <img src={one} />
            <p className="legend">Tokyo</p>
          </div>
          <div>
            <img src={one} />
            <p className="legend">Tel Aviv</p>
          </div>
          <div>
            <img src={one} />
            <p className="legend">Paris</p>
          </div>
      </Carousel>
    </div>
  );
}

export default App;
