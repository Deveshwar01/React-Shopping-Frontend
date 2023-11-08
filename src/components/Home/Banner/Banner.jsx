import "./Banner.scss";
import BannerImg from "../../../assets/rbu.jpeg";
const Banner = () => {
  return (
    <div className=" hero-banner">
      {/* <img className="banner-img" src={BannerImg} alt="" /> */}
      <img src={BannerImg} alt="RBU IMG" class="responsive" width="600" height="400"></img>
    </div>
  );
};

export default Banner;