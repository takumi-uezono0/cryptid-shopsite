import React from "react";
import "./css/Main1.css";
import "./css/slick.css";
import "./css/slick-theme.css";

import Image1 from './images/Rectangle 1.png';
import Wakka from './images/samplewakka.png';
import Ynkm from './images/sampleynkm.png';
import Zoro from './images/samplezoro.png';




import Image2 from './images/Rectangle 3.png';
import Image3 from './images/Rectangle 4.png';
import Image4 from './images/Rectangle 5.png';
import Line1  from './images/Rectangle 41.png';


const Main = () => {
    return (
        
            
            <div className = "MainPage">
                <ul className = "slider"> 
                    <img src={Image1}/> 
                    <img src={Wakka}/>
                    <img src={Ynkm}/>
                    <img src={Zoro}/>
                    
                </ul> 
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
                <script src="slick.min.js"></script>
                <script src="sla.js"></script>
                
                
               
            














                <div className = "Introduction">
                    <div claass = "InSection">
                        <img src={Line1}/>
                    </div>
                                       
                    <img src={Image2}/>
                    <p>弊社は「幻獣と人間の幸せな共生社会の実現」を経営理念に掲げ、<br></br>
                        お客様とCCA（コンパニオンクリプティッドアニマル）の幸せを願い、 従業員一同日々努力しております。<br></br>
                        私たちは、CCAを取り巻く課題や問題に対しても一つ一つ向き合いながら、<br></br>
                        幻獣と人間の幸せな共生の為に、全員一丸となって取り組んでまいります。</p>
                </div>

                <div className = "Support">
                    <div claass = "SuSection">
                        <img src={Line1}/>

                    </div>    
                    <img src ={Image3}/>
                    <p>幻獣たちとのペットライフはお迎えいただいてからが本番です。<br></br>
                        初めての不安を幸せに変えるため、弊社が全力でサポートいたします。<br></br>
                     ・幻獣たちそれぞれの生態や捕獲に至った経緯を記した「幻獣攻略マニュアル本」をプレゼント<br></br>
                     ・24時間365日電話での健康相談・緊急相談サービス</p>

                </div>   

                <div className = "MedicalCheck">
                    <div claass = "MeSection">
                        <img src={Line1}/>

                    </div>   
                    <img src ={Image4}/>
                    <p>幻獣たちはとても強い生き物ですが、環境の変化に敏感な個体も多く、本来飼育には適しておりません。<br></br>
                        ですが、専門知識がある私たちが定期的に健康診断を行わせていただくことで、<br></br>
                        元気に暮らしていけるようにサポートをさせていただきます。</p>
                   </div> 

                

            









            
        </div>

    );

};
export default Main;