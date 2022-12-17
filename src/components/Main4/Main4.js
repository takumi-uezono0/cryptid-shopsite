import React from "react";
import "./Main4.css";
import NewArrivalLogo from './images/NewArrivalLogo.png';
import List1 from './images/Rectangle 9-1.png';
import List2 from './images/Rectangle 9-2.png';
import List3 from './images/Rectangle 9-3.png';
import Waku from './images/sozai_image_205108 1.png';


const Main4 = () => { 
return (
  <div>
      <div className="main4Frame">
            <div className="NewArrival">
              <img src={NewArrivalLogo}/>  
            </div> 
              <div className="imageFrameset">

                  <div className="imageFrame1">              
                      <img src={Waku}/>
                        <div className="imageList1">
                            <a href="#"><img src={List1}/></a>
                                <div className="imageList1Comment">
                                    <p><strong>妖精</strong>   ¥1,690,000- </p>
                                    <small>シャイな為画像を掲載しておりません。<br></br>
                                        確認の際は直接店舗へお越しください。</small>
                                </div>
                        </div>
                  </div>

                  <div className="imageFrame2">    
                      <img src={Waku}/>
                        <div className="imageList2">
                            <a href="#"><img src={List2}/></a>
                                <div className="imageList2Comment">
                                   <p><strong>貞子</strong> ¥368,000-</p>
                                </div>
                        </div> 
                  </div>

                  <div className="imageFrame3">    
                      <img src={Waku}/> 
                        <div className="imageList3">
                            <a href="#"><img src={List3}/></a>
                                <div className="imageList3Comment">
                                  <p><strong>ペガサス</strong>  ¥1,000,000-</p>
                                </div>  
                        </div>                
                  </div>
              </div>  
      </div>
  </div>  
);
}

export default Main4;