import './Slider.css';

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <h2 className="heading">Tutorials that people love most</h2>
      <div className="slider-scroll">
        <div className="card">
          <img src="https://picsum.photos/200/150?1" alt="tutorial" />
          <h4>How to use camera</h4>
          <p>Tips and tricks for DSLR beginners</p>
        </div>
        <div className="card">
          <img src="https://picsum.photos/200/150?2" alt="tutorial" />
          <h4>Editing on Canva</h4>
          <p>Create cool posters using Canva</p>
        </div>
        <div className="card">
          <img src="https://picsum.photos/200/150?3" alt="tutorial" />
          <h4>Lighting setup</h4>
          <p>Simple 3-light setup for YouTubers</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
