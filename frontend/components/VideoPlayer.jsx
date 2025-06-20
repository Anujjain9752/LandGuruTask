const VideoPlayer = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Watch Intro Video</h2>
      <video width="100%" controls>
        <source src="https://videos.pexels.com/video-files/855418/855418-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
