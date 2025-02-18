import Logo from "../../assets/images/Logo.png";

import "./Header.css";

function Header() {
  return (
    <div className="Header_Container">
      <img src={Logo} alt="Logo du site Fit Tracker" />
    </div>
  );
}

export default Header;
