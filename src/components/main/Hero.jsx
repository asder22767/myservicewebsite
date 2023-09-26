import { useState } from "react";
import { locationicon, searchIcon } from "../../assets/images";

const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  const isClickedHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <section className="hero h-[580px] bg-herobackground bg-[length:600px_545px] bg-no-repeat bg-[right_122px_top_10px]">
        <div className="container mx-auto">
          <div className="hero__wrapper pt-20">
            <div className="hero__text w-[545px]">
              <h2 className="hero__heading font-merriweather font-bold text-darkblue text-[64.8px] leading-[86.3px]">
                Modern living for everyone
              </h2>
              <p className="hero__text--insight left-px font-opensans font-normal text-darkblue text-[21.2px] leading-[34.2px] mb-6">
                We provide a complete service for the sale, purchase or rental
                of real estate. We have been operating in Madrid and Barcelona
                more than 15 years.
              </p>
            </div>
            <form className="hero__form--search flex w-[737px] p-6 bg-lightgray rounded gap-4">
              <select
                name="category"
                id="property--category"
                title="category"
                className="hero__select--category cursor-pointer w-[205px] p-4 outline-none border border-gray-300 duration-300 focus:border-[#4764C3] rounded bg-white text-[#898C95] focus:text-[#4764C3] leading-[27px]"
              >
                <option value="propertyType">Property Type</option>
                <option value="apartment">apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
                <option value="compound">Compound</option>
                <option value="duplex">Duplex</option>
                <option value="fullFloor">Full Floor</option>
                <option value="halfFloor">Half Floor</option>
                <option value="wholeBuilding">Whole Building</option>
                <option value="bulkRentUnit">Bulk Rent Unit</option>
                <option value="bungalow">Bungalow</option>
                <option value="hotel">Hotel</option>
              </select>

              <div
                onClick={isClickedHandler}
                className={`hero__wrapper--input cursor-pointer w-[302px] h-14 flex items-center border ${
                  isClicked ? "border-[#4764C3]" : "border-gray-300"
                }  rounded bg-white`}
              >
                <img src={locationicon} alt="icon" className="m-4" />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Location"
                  className="font-opensans font-normal text-inputcolor text-[17px] leading-[27px] outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="hero__btn--submit w-[150px] h-14 flex items-center gap-4 py-[17px] pl-6 pr-10 bg-btn border border-btn rounded font-opensans font-bold text-white text-base text-center leading-[normal]"
              >
                <img src={searchIcon} alt="icon" />
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
