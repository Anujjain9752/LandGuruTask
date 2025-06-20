import './App.css';
import Slider from "../components/Slider"
import VideoPlayer from '../components/VideoPlayer';
import Accordion from '../components/Accordion';
import Reviews from '../components/Reviews';

function App() {
  return (
    <div>
      <Slider />
      <VideoPlayer />
      <Accordion />
      <Reviews />
    </div>
  );
}

export default App;
