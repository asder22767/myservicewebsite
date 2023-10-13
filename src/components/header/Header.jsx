import logo from "./../../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header mt-[46px] mb-16">
        <div className="header__container container mx-auto">
          <div className="header__wrapper flex justify-center">
            <img
              src={logo}
              alt="logo of real estate"
              className="header__logo w-[300px] h-20"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
