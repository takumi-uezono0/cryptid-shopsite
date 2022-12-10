import React from "react";
import "./search.css";

const search = () => {
    return(
        <div className="back">
            <div id="img1"></div>
            <div id="search">
                <input id="text1" type="text" placeholder="すべての種類から探す"></input>
                <input id="text2" type="text" placeholder="店舗から探す"></input>
                <input id="text3" type="text" placeholder="性別から探す"></input>
                <input id="text4" type="text" placeholder="フリーワード検索"></input>
            <input id="sb" type="submit" value="検索"></input>
            </div>
            <div id="img2"></div>
        </div>
    )
}

export default search;