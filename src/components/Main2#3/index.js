import { render } from "@testing-library/react";
import React from "react";
import"./subindex.css";


 
const Main2 = () => {
    return(
        <div className="color">


            <div id="text1">

                {/*<h1><photo1 href="images\font\tou.png"></photo1></h1>*/}
                {/*<h1><photo2 href="images\font\tou.sub.png"></photo2></h1>*/}


            {/*<img src={"images\photo1.png"}/>*/}
            <p>弊社は「幻獣と人間の幸せな共生社会の実現」を経営理念に掲げ、</p>
            <p>お客様とCCA（コンパニオンクリプティッドアニマル）の幸せを願い、 従業員一同日々努力しております。</p>
            <p>私たちは、CCAを取り巻く課題や問題に対しても一つ一つ向き合いながら、</p>
            <p>幻獣と人間の幸せな共生の為に、全員一丸となって取り組んでまいります。</p>
        </div>

    

        <div id="text2">

           {/* <h1><photo3 href="images\font\o.png"></photo3></h1>*/}
            {/*<h1><photo4 href="images\font\o.sub.png"></photo4></h1>*/}

        {/*<img src={"images\photo2.png"}/>*/}
                <p>幻獣たちとのペットライフはお迎えいただいてからが本番です。</p>
                <p>初めての不安を幸せに変えるため、弊社が全力でサポートいたします。</p>

                <ul>
                        <li>幻獣たちそれぞれの生態や捕獲に至った経緯を記した「幻獣攻略マニュアル本」をプレゼント</li>
                        <li>24時間365日電話での健康相談・緊急相談サービス</li>

                </ul>
            </div>
            
            
            <div id="text3">

            {/*<h1><photo5 href="images\font\ken.png"></photo5></h1>*/}
            {/*<h1><photo6 href="images\font\ken.sub.png"></photo6></h1>*/}

            {/*<img src={"images\photo3.png"}/>*/}
                <p>幻獣たちはとても強い生き物ですが、環境の変化に敏感な個体も多く、本来飼育には適しておりません。</p>
                <p>ですが、専門知識がある私たちが定期的に健康診断を行わせていただくことで、</p>
                <p>元気に暮らしていけるようにサポートをさせていただきます。</p>
            </div>
            
    
            </div>
    );
}
export default Main2