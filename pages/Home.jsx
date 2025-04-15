import Swiper1 from "../components/Swiper1";
import Swiper2 from "../components/Swiper2";
import About from "../components/About";

const Home = () => {
  return (
    <div style={{ margin: "auto", maxWidth: "80%", paddingTop: "7vh" }}>
      <Swiper1 />
      <Swiper2 />
      <About />
    </div>
  );
};

export default Home;
