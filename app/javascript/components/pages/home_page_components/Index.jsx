import React from "react";

//SVG
import AirBnbIcon from "../../images/company_icons/AirBnb";
import AppleIcon from "../../images/company_icons/Apple";
import DisneyIcon from "../../images/company_icons/Disney";
import DreamworksIcon from "../../images/company_icons/Dreamworks";
import DropboxIcon from "../../images/company_icons/Dropbox";
import EAIcon from "../../images/company_icons/EA";
import HasbroIcon from "../../images/company_icons/Hasbro";
import MicrosoftIcon from "../../images/company_icons/Microsoft";
import NetflixIcon from "../../images/company_icons/Netflix";
import UbisoftIcon from "../../images/company_icons/Ubisoft";
import WarnerbrosIcon from "../../images/company_icons/Warnerbros";
import HeroSectionImage from "../../images/HeroSectionImage";

const Index = () => {
  return (
    <main className="wrapper">
      <div className="container">
        <section id="homepage_hero">
          <div className="homepage_hero_text">
            <h1 className="homepage_hero_text_title">
              The super fast <br/>
              color palettes <br/>
              generator!
            </h1>
            <p>
              Create the perfect palette or get inspired by <br/>
              thousands of beautiful color schemes.
            </p>
            <div className="homepage_hero_text_btns">
              <a href='/generate' className="btn btn--primary btn-m">
                Start the generator!
              </a>
              <a href='/pallets/trending' className="btn btn--secondary btn-m">
                Explore trending palettes
              </a>
            </div>
          </div>
          <div className="homepage_hero_image">
            <HeroSectionImage />
          </div>
        </section>
        <section id="homepage_testimonials">
          <div className="testimonials_title">
            Used by 5+ million designers and by top companies
          </div>
          <ul>
            <li>
              <a href="https://disney.com" target="_blank">
                <DisneyIcon />
              </a>
            </li>
            <li>
              <a href="https://dreamworks.com/" target="_blank">
                <DreamworksIcon />
              </a>
            </li>
            <li>
              <a href="https://www.warnerbros.com/" target="_blank">
                <WarnerbrosIcon />
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com/" target="_blank">
                <NetflixIcon />
              </a>
            </li>
            <li>
              <a href="https://ru.airbnb.com/" target="_blank">
                <AirBnbIcon />
              </a>
            </li>
            <li>
              <a href="https://www.dropbox.com/" target="_blank">
                <DropboxIcon />
              </a>
            </li>
            <li>
              <a href="https://hasbro.com/" target="_blank">
                <HasbroIcon />
              </a>
            </li>
            <li>
              <a href="https://www.ubisoft.com/" target="_blank">
                <UbisoftIcon />
              </a>
            </li>
            <li>
              <a href="https://ea.com/" target="_blank">
                <EAIcon />
              </a>
            </li>
            <li>
              <a href="https://apple.com/" target="_blank">
                <AppleIcon />
              </a>
            </li>
            <li>
              <a href="https://microsoft.com/" target="_blank">
                <MicrosoftIcon />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Index;