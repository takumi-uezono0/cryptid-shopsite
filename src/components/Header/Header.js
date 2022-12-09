import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="Logo">
        <div id="h">
          <p1>PET SHOP</p1>
          <p></p>
          <p2>神兽商店</p2>
        </div>
        <div id="Tel">
          <p3>お問合わせ:</p3>
          <p4>0120-XXX-XXXX</p4>
        </div>
        <div>
          <p id="line"></p>
        </div>
        <nav>
          <ul>
            <li><a href=" ">検索</a></li>
            <li><a href=" ">お気に入り</a></li>
            <li><a href=" ">ABOUT</a></li>
            <li><a href=" ">MENU</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
