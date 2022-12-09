import React from "react";
import "./search.css";

const search = () => {
    return(
        <div className="back">
            <div id="img1"></div>
            <input id="text1" type="text"></input>
            <input id="text2" type="text"></input>
            <input id="text3" type="text"></input>
            <input id="text4" type="text"></input>
            <input id="sb1" type="submit" value="検索"></input>
            <input id="sb2" type="submit" value="検索"></input>
            <div id="img2"></div>
        </div>
    )
}

export default search;