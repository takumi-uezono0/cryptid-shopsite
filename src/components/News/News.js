import React from "react";
import "./News.css";
import CreditImage from "./images/money_credit-card_13598 1 (1).png";

const News = () => {
  return (
    <div className="NewsFrame">
      <div className="NewsList">
        <div id="title">▼お知らせ</div>

        <div className="Recruit">
          <a id="recuitA" href="#">
            <div id="recruit">
              <div id="recruitBack">求人情報</div>
            </div>
          </a>
        </div>

        <div className="Credit">
          <a id="creditA" href="#">
            <div className="shopping">
              <div id="shopping">SHOPPING</div>
              <div id="shopping">CREDIT</div>
            </div>
            <div className="bunkatu">
              <div id="setumei">分割払い最長</div>
              <div id="bunkatu">
                36回<sub>まで</sub>
              </div>
            </div>
            <img src={CreditImage} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
