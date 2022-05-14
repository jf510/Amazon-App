import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Art of War: The Essential Translation of the Classic Book of Life (Penguin Classics)
            by Sun-tzu and John Minford"
            price={12.79}
            image="https://m.media-amazon.com/images/I/81+0HNiEsOL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Professional 5™ Plus Series 5 Quart Bowl-Lift Stand Mixer"
            price={239.99}
            image="https://kitchenaid-h.assetsadobe.com/is/image/content/dam/global/kitchenaid/countertop-appliance/portable/images/hero-KV25G0XER.tif"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Nespresso Capsules OriginalLine, Ispirazione Arpeggio Intenso, Dark Roast Coffee, 50 Count Coffee Pods, Brews 1.35oz"
            price={37.99}
            image="https://m.media-amazon.com/images/I/81LuwA7230L._SX679_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Official Creality Ender 3 3D Printer Fully Open Source with Resume Printing Function DIY 3D Printers Printing Size 220x220x250mm"
            price={189.49}
            image="https://m.media-amazon.com/images/I/61e4E1vskGS._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Apple Watch Series 7 [GPS 41mm] Smart Watch w/ Starlight Aluminum Case with Starlight Sport Band. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
            price={329.89}
            image="https://m.media-amazon.com/images/I/71S6CQmCTsL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="2021 Compound Bow and Arrow for Adults and Teens – Hunting Bow with Gordon Limbs Made in USA - Fully Adjustable for Women and Youth 30-70 LBS, 23.5-30.5” - 320 FPS Speed – 5-Pin Sight, Quiver"
            price={318.12}
            image="https://m.media-amazon.com/images/I/71XxK6TqpFL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
