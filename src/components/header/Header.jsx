import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header mt-[46px] mb-16">
        <div className="header__container container mx-auto">
          <div className="header__wrapper flex justify-between items-center">
            <div className="header__wrapper--left flex items-center">
              <img
                src={logo}
                alt="logo of real estate"
                className="header__logo mr-[72px]"
              />
              <nav className="header__nav">
                <ul className="header__nav--lists list-none flex gap-6">
                  <li className="header__nav--items font-opensans font-normal text-navcolor">
                    Top offers
                  </li>
                  <li className="header__nav--items font-opensans font-normal text-navcolor">
                    Search in offers
                  </li>
                  <li className="header__nav--items font-opensans font-normal text-navcolor">
                    References
                  </li>
                  <li className="header__nav--items font-opensans font-normal text-navcolor">
                    About us
                  </li>
                  <li className="header__nav--items font-opensans font-normal text-navcolor">
                    Our team
                  </li>
                </ul>
              </nav>
            </div>
            <button
              className="header__btn--contact inline-flex py-[13px] px-6 rounded bg-btn font-opensans font-bold text-white text-[16px] text-center"
              title="btn--contact"
            >
              Contact us
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
