import React, { Component } from "react";

 export class Page extends Component{
    

render() {
    return(
    <div>
           
            <div className="main">                    
            <img className="main-picture" src={require('./assets/Naslovna-slika.jpg')} alt="Naslovna slika"/>
                <p className="main-text"> All the movies in one place...</p>
                </div>

            <div className="bottom-half">
                <div className="main-2">
                    <p className="tekst"> {this.props.myDataText}
                    </p>
                </div>  
 
                <div className="side-news">
                    <h2 id="news-line"> News </h2>
                    <ul id="news-text">
                        <li className="news-li-item">Prvi link ...<a className="link-style" href="www.google.com">prvi link</a></li>
                        <li className="news-li-item">Drugi link ...<a className="link-style" href="www.google.com">drugi link</a></li>
                        <li className="news-li-item">Treci link ...<a className="link-style" href="www.google.com">treci link</a></li>
                    </ul>
                </div>
         </div>  
            
        
    </div>
    );
    }

}