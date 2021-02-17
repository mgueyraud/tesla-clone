import "./Header.css";

import TeslaLogo from "../../assets/img/teslaLogo.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla logo" />
            </div>

            <div className="header__center">
                <a href="macanada">Model S</a>
                <a href="macanada">Model 3</a>
                <a href="macanada">Model X</a>
                <a href="macanada">Model Y</a>
                <a href="macanada">Solar roof</a>
                <a href="macanada">Solar panel</a>
            </div>

            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    );
}

export default Header;