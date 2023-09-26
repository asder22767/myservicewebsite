import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="w-[1121px] relative h-[48px]">
      <div className="absolute w-[985px] h-[48px] top-0 left-[136px]">
        <img
          className="absolute w-[65px] h-[40px] top-[4px] left-0"
          alt="Vector"
          src={logo}
        />
        <ul className="w-[995px] relative h-[48px]">
          <li className="absolute top-[6px] left-0 font-opensans font-normal text-[color:var(--text-color)] text-[16px] tracking-[0] leading-[34.2px] whitespace-nowrap">
            Top offers
          </li>
          <li className="absolute top-[6px] left-[101px] font-opensans font-normal text-[color:var(--text-color)] text-[16px] tracking-[0] leading-[34.2px] whitespace-nowrap">
            Search in offers
          </li>
          <li className="absolute top-[6px] left-[440px] font-opensans font-normal text-[color:var(--text-color)] text-[16px] tracking-[0] leading-[34.2px] whitespace-nowrap">
            Our team
          </li>
          <li className="absolute top-[6px] left-[349px] font-opensans font-normal text-[color:var(--text-color)] text-[16px] tracking-[0] leading-[34.2px] whitespace-nowrap">
            About us
          </li>
          <li className="absolute top-[6px] left-[242px] font-opensans font-normal text-[color:var(--text-color)] text-[16px] tracking-[0] leading-[34.2px] whitespace-nowrap">
            References
          </li>
        </ul>
        <button className="absolute w-[134px] h-[48px] top-0 left-[851px] all-[unset] box-border">
          <div className="inline-flex items-center gap-[10px] px-[24px] py-[13px] relative bg-[color:var(--cta-2)] rounded-[4px] overflow-hidden">
            <div className="relative w-fit mt-[-1.00px] font-opensans font-bold text-white text-[16px] text-center tracking-[0] leading-[normal]">
              Contact us
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
