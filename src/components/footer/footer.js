import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="FooterFrame">
      <div className="shopName">
        <div id="smallName">PET SHOP</div>
        <div id="Name">神兽商店</div>
      </div>
      <div className="linkA">
        <div>SITEMAP</div>
        <div>
          <a href="">MENU</a>
        </div>
        <div>
          <a href="">検索</a>
        </div>
        <div>
          <a href="">会社概要</a>
        </div>
      </div>
      <div className="linkB">
        <div id="recruitTitle">採用情報</div>
        <div id="recruitA">募集要項</div>
        <div id="recruitAddress">
          <div id="yubin">〒459-5540</div>
          <div id="jusyo">桃源郷6丁目　地獄横丁5-3</div>
        </div>
        <div id="recruitAddressOption">▷きさらぎ駅前北東に看板が目印です！</div>
      </div>
      <div>©︎copyright：〜〜〜〜〜〜〜〜〜</div>
    </div>
  );
};

export default Footer;
