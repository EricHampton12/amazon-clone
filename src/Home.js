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
            id="234593"
            title="Once Upon a Rhyme: One Week --Three Lives--Three Deaths--a Lifetime in Limericks by 
            Antony L. Saragas"
            price={19.99}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610086335l/56217519.jpg"
            rating={5}
          />
          <Product
            id="123456"
            title="New Apple Ipad Pro (12-inch, Wi-Fi, 250gb) - Silver (5th Generation)"
            price={399.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Samsung Watch"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_Sx466_.jpg"
          />
          <Product
            id="236948"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={99.99}
            rating={3}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="4928394"
            title="New Apple Ipad Pro (12.9-inch, Wi-Fi, 128gb) - Silver (4th Generation)"
            price={599.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="58585893"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1099.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
