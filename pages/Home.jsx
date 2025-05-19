import Swiper1 from "../components/Swiper1";
import Swiper2 from "../components/Swiper2";
import About from "../components/About";
import Swiper1New from "../components/Swiper1New";

const Home = () => {
  return (
    <div style={{ margin: "auto", maxWidth: "80%" }}>
      {/* <Swiper1 /> */}
      <Swiper1New />
      <Swiper2 />
      <About />
    </div>
  );
};

export default Home;
