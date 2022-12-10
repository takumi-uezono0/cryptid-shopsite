import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="FooterFrame">
      <div className="FooterMenu">
        <div className="shopName">
          <div id="smallName">PET SHOP</div>
          <div id="Name">神兽商店</div>
        </div>
        <div className="siteMap">
          <div id="siteMap">SITEMAP</div>
          <div id="siteMapMenu">
            <a href="#">MENU</a>
          </div>
          <div id="siteMapMenu">
            <a href="#">検索</a>
          </div>
          <div id="siteMapMenu">
            <a href="#">会社概要</a>
          </div>
        </div>
        <div className="recruit">
          <div id="recruitTitle">採用情報</div>
          <div id="recruitA">
            <a href="#">募集要項</a>
          </div>
          <div id="recruitAddress">
            <a href="#">
              <div id="yubin">〒459-5540</div>
              <div id="jusyo">桃源郷6丁目　地獄横丁5-3</div>
            </a>
          </div>
          <div id="recruitAddressOption">
            ▷きさらぎ駅前北東に看板が目印です！
          </div>
        </div>
      </div>
      <div id="copyRight">©︎copyright：〜〜〜〜〜〜〜〜〜</div>
    </div>
  );
};

export default Footer;
