import Navbar from "./Navbar";
import wallpaper from '../assets/wallpaper.jpg';

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${wallpaper})`, // Inline style for background image
          backgroundSize: 'cover', // Optional: To ensure the image covers the whole div
          backgroundPosition: 'center', // Optional: To center the image
          height: '100vh' // Optional: To make sure the div takes full screen height
        }}
      >
        <Navbar />
      
      </div>
    </>
  );
};

export default Home;

