import "./LoadingPage.css";
import Bars from "../src/assets/Bars.svg";

const LoadingPage = () => {
  return (
    <div className="loadingPageContainer">
      <div className="loadingTitle">Loading...</div>
      <img src={Bars} alt="loading" />
    </div>
  );
};

export default LoadingPage;
