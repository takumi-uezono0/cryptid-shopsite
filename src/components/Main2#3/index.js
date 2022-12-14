import { render } from "@testing-library/react";
import React from "react";
import"./subindex.css";


 
render();{
    return(
        <div className="color">
            <div id="text1">

            <p>弊社は「幻獣と人間の幸せな共生社会の実現」を経営理念に掲げ、</p>
            <p>お客様とCCA（コンパニオンクリプティッドアニマル）の幸せを願い、 従業員一同日々努力しております。</p>
            <p>私たちは、CCAを取り巻く課題や問題に対しても一つ一つ向き合いながら、</p>
            <p>幻獣と人間の幸せな共生の為に、全員一丸となって取り組んでまいります。</p>
        </div>
        
        <img src={"images\photo1.png"}/>

        <div id="text2">
                <p>幻獣たちとのペットライフはお迎えいただいてからが本番です。</p>
                <p>初めての不安を幸せに変えるため、弊社が全力でサポートいたします。</p>

                <ul>
                    <nav>
                        <li>幻獣たちそれぞれの生態や捕獲に至った経緯を記した「幻獣攻略マニュアル本」をプレゼント</li>
                        <li>24時間365日電話での健康相談・緊急相談サービス</li>
                    </nav>
                </ul>
            </div>
            <img src={"images\photo2.png"}/>
            
            <div id="text3">
                <p>幻獣たちはとても強い生き物ですが、環境の変化に敏感な個体も多く、本来飼育には適しておりません。</p>
                <p>ですが、専門知識がある私たちが定期的に健康診断を行わせていただくことで、</p>
                <p>元気に暮らしていけるようにサポートをさせていただきます。</p>
            </div>
            
            <img src={"images\photo3.png"}/>
            </div>
    );
}