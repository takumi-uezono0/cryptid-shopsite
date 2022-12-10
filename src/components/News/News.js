import React from "react";
import "./News.css";

const News = () => {
  return (
    <div className="NewsFrame">
      <div className="NewsList">
        <div id="title">▼お知らせ</div>
        <a href="#">
          <div id="recruit">求人情報</div>
        </a>
        <div className="credit">
          <div id="shopping">SHOPPING</div>
          <div id="shopping">CREDIT</div>
          <div className="bunkatu">
            <div id="setumei">分割払い最長</div>
            <div id="bunkatu">36回</div>
            <div id="made">まで</div>
          </div>
          <div id="creditImage"></div>
        </div>
      </div>
    </div>
  );
};

export default News;
