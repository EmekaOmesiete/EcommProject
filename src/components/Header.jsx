import React, { useState } from "react";
import "./HeaderStyle.css";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import ShopDrop from "./ShopDrop";

const Header = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);
  return (
    <div className="Header_Container">
      <header className="Header_Wrapper">
        <h2>
          Emeka <span>Shop</span>
        </h2>

        <article className="right_Side_Header">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li onMouseEnter={() => setShowDrop(true)}>Shop</li>
            </ul>
          </nav>
          <div className="profile_Icons">
            <div className="icon_with_count">
              <FaCartShopping className="icon" />
              <div className="icon_Count">0</div>
            </div>
            <div className="icon_with_count">
              <FaHeart className="icon" />
              <div className="icon_Count">0</div>
            </div>

            <FaSearch
              className="icon"
              onClick={() => setSearchShow(!searchShow)}
            />
            <FaUserCircle
              className="icon profil"
              onClick={() => setProfileShow(!profileShow)}
            />
            {profileShow ? <div className="show_Profile_Drop"></div> : null}

            {!mobileShow ? (
              <RiMenuFold3Fill
                className="_icon Menu_icon"
                onClick={() => setMobileShow(true)}
              />
            ) : (
              <RiMenuFold4Fill
                className="icon Menu_icon"
                onClick={() => setMobileShow(false)}
              />
            )}
          </div>

          {showDrop ? (
            <div 
            className="Drop_Show_Body"
            onMouseLeave={()=> setShowDrop(false)}
            >
                <ShopDrop/>
            </div>
          ) : null}
        </article>

        {mobileShow ? <div className="Mobile_Nav"></div> : null}

        {searchShow ? <div className="Search_Body_Show"></div> : null}
      </header>
    </div>
  );
};

export default Header;
