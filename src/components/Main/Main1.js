import React from "react";
import "./Main1.css";
import Publicity1 from './images/Rectangle 1.png';

const Main = () => {
    return (            
            <div className = "Main1Frame">
                <div className = "BigPublicity">
                <a href="#"><img src={Publicity1}/></a>
                        <div className ="BPComment">
                            <p>ドラゴン<br></br>価格:580,000円(税込)</p>
                        </div>
                </div>


            </div>    
            
                                      
    );

};
export default Main;