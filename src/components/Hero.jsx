import React from "react";
import "./HeroStyle.css";
import football3 from "../assets/Untitled design.png";
import Football1 from "../assets/Football.png";
import Football2 from "../assets/football1.png";

const Hero = () => {
  return (
    <div className="Hero_Conmtainer">
      <div className="Hero_Wrapper">
        <article className="Hero_Left">
            <div className="Hero_Left_Info">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEksBsEoYSsCg/profile-displayphoto-shrink_400_400/B56ZeD134iHEAo-/0/1750263629878?e=1758758400&v=beta&t=R86MoLRJI0Nr3ew0JcUecJ3NUGHOPlLhhlg42sHNpIY"
              alt=""
            />
            <h2>Omesiete Emeka Michael</h2>
            <p>Hi, I'm Omesiete Emeka Michael, a young and ambitious Frontend developer with a drive to succeed in 
                the tech industry. I'm committed to honing my skills and staying up-to-date with the latest trends.
                I'd like to expend my appreciation to Ibrahim Alabi, who made my rough start at Curve Africa smoother.
                Our Google Meet sessions were invaluable, making complex concepts more accessible and helped me stay on track.
                Football ⚽ is another passion of mine, and I enjoy the thrill of competition and teamwork. When I'm not immersed 
                in code, I love watching and playing football.
            </p>
          </div>
        </article>
        <div className="Hero_Right">
          <button className="Btn"></button>
          <div className="Product_Display">
            <img src={football3} alt="ProductImage" />
          </div>
          <button className="Btn"></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
