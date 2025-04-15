import "../components/About.css";

import linkedin from "../src/assets/icons/linkedin.png";
import mediosDeComunicacionSocial from "../src/assets/icons/medios-de-comunicacion-social.png";
import instagram from "../src/assets/icons/logotipo-de-instagram.png";
import whatsapp from "../src/assets/icons/whatsapp.png";
import tiktok from "../src/assets/icons/tik-tok.png";
import facebook from "../src/assets/icons/facebook.png";

const About = () => {
  return (
    <>
      <div className="divFather">
        <div className="divh1">
          <div>ABOUT US</div>
        </div>

        <div className="divChildAbout">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            voluptates minima veniam. Ea sequi, quaerat quo vitae nemo iusto
            quam rem animi.
          </div>
        </div>

        <div className="divChildAbout">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>

        <div className="divSocialsContainer">
          <div className="divFollow">
            FOLLOW US!{" "}
            <div className="divFollowIcons">
              <img
                style={{ objectFit: "contain", width: "20px" }}
                src={instagram}
                alt="Instagram"
                className=""
              />
              <img
                style={{ objectFit: "contain", width: "20px" }}
                src={facebook}
                alt="Facebook"
              />
              <img
                style={{ objectFit: "contain", width: "20px" }}
                src={tiktok}
                alt="Tiktok"
              />
            </div>
          </div>
          <div className="divWorkWithUsContainer">
            <div className="divWorkWithUs">Work with us</div>
            <div className="divWorkImg">
              <img
                style={{ objectFit: "contain", width: "20px" }}
                src={linkedin}
                alt="Linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
