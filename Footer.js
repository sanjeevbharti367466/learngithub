import React, {Component} from 'react';
//import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
 

import {Footer, FooterSpan, FacebookIcon, TwitterIcon, GoogleIcon, Mobile, Div, Span } from './Footer.style';



class Footer1 extends Component{
    render(){
        return(
            <div>
            <Footer>
            <FooterSpan><FacebookIcon/><TwitterIcon/><GoogleIcon/></FooterSpan>
            <FooterSpan><Link to="/AboutUs" style={{textDecoration:'none', color:'#ffffff'}} >About us</Link> | <Link to="/Priceing" style={{textDecoration:'none', color:'#ffffff'}} >Pricing</Link> | <Link to="/ContactUs" style={{textDecoration:'none', color:'#ffffff'}} >Contact us</Link> | <Link to="/Tearms" style={{textDecoration:'none', color:'#ffffff'}} >Terms & Condition</Link> |<Link to="/Privacy" style={{textDecoration:'none', color:'#ffffff'}} > Privacy Policy</Link></FooterSpan>
            <FooterSpan>© 2017 SGM TECHNOLOGIES, All rights reserved | <strong>Powered by go4edu.in</strong></FooterSpan>
          </Footer>


                <Mobile>

                        <Div><FooterSpan><FacebookIcon/><TwitterIcon/><GoogleIcon/></FooterSpan></Div>
                        <Div direction flex >
                            <Span><Link to="/AboutUs" style={{textDecoration:'none', color:'#ffffff'}} >About us</Link></Span> 
                            <Span top><Link to="/Priceing" style={{textDecoration:'none', color:'#ffffff'}} >Pricing</Link></Span> 
                            <Span top><Link to="/ContactUs" style={{textDecoration:'none', color:'#ffffff'}} >Contact us</Link></Span> 
                            <Span top><Link to="/Tearms" style={{textDecoration:'none', color:'#ffffff'}} >Terms & Condition</Link> </Span> 
                            <Span top><Link to="/Privacy" style={{textDecoration:'none', color:'#ffffff'}} >Privacy Policy</Link></Span>
                        </Div>

                        <Div direction >
                            <Span font>© 2017 SGM TECHNOLOGIES, All rights reserved</Span>
                            <Span font>Powered by go4edu.in</Span>    
                        </Div>
                        

                </Mobile>

          </div>



        );
        
    }
}
export default Footer1;